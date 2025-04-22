"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface Window {
    deferredPrompt: BeforeInstallPromptEvent | null;
  }
}

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [displayCount, setDisplayCount] = useState(() => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("pwaDisplayCount")) || 0;
    }
    return 0;
  });

  const [wasManuallyClosed, setWasManuallyClosed] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("wasManuallyClosed") === "true";
    }
    return false;
  });

  const MAX_DISPLAYS = 4;

  const updateDisplayCount = useCallback(() => {
    const newCount = displayCount + 1;
    setDisplayCount(newCount);
    localStorage.setItem("pwaDisplayCount", String(newCount));
  }, [displayCount]);

  const showInstallPrompt = useCallback(async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setDeferredPrompt(null);
        window.deferredPrompt = null;
        setIsVisible(false);
        setWasManuallyClosed(true);
        localStorage.setItem("pwaDisplayCount", String(MAX_DISPLAYS));
        localStorage.setItem("wasManuallyClosed", "true");
      } else if (outcome === "dismissed") {
        // Only increment display count on dismiss
        updateDisplayCount();
      }
    } catch (error) {
      console.error("Error showing install prompt:", error);
    }
  }, [deferredPrompt, updateDisplayCount]);

  // Handle beforeinstallprompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      window.deferredPrompt = e;

      // Show prompt if conditions are met
      if (displayCount < MAX_DISPLAYS && !wasManuallyClosed && !isStandalone) {
        setIsVisible(true);
      }
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as any
    );

    // Check if we have a deferred prompt
    if (
      window.deferredPrompt &&
      !isVisible &&
      displayCount < MAX_DISPLAYS &&
      !wasManuallyClosed &&
      !isStandalone
    ) {
      setDeferredPrompt(window.deferredPrompt);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as any
      );
    };
  }, [displayCount, wasManuallyClosed, isVisible, isStandalone]);

  // Platform detection and online status
  useEffect(() => {
    const checkPlatform = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));
      setIsStandalone(
        window.matchMedia("(display-mode: standalone)").matches ||
          (window.navigator as any).standalone === true
      );
    };

    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    checkPlatform();
    handleOnlineStatus();

    window.addEventListener("resize", checkPlatform);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("resize", checkPlatform);
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  // iOS specific display logic
  useEffect(() => {
    if (
      !isIOS ||
      wasManuallyClosed ||
      displayCount >= MAX_DISPLAYS ||
      isVisible ||
      isStandalone
    )
      return;

    const showDelay = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
    const timer = setTimeout(() => {
      setIsVisible(true);
      updateDisplayCount();
    }, showDelay);

    return () => clearTimeout(timer);
  }, [
    isIOS,
    wasManuallyClosed,
    displayCount,
    isVisible,
    isStandalone,
    updateDisplayCount,
  ]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      showInstallPrompt();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setWasManuallyClosed(true);
    localStorage.setItem("wasManuallyClosed", "true");
    updateDisplayCount();
  };

  if (isStandalone || displayCount >= MAX_DISPLAYS) return null;

  return (
    <AnimatePresence mode="wait">
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.7,
          }}
          className="fixed top-4 inset-x-0 mx-auto max-w-md z-50 p-4 bg-red-600 text-white rounded-lg shadow-lg"
        >
          You are currently offline. Some features may be limited.
        </motion.div>
      )}

      {isVisible &&
        (isIOS ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.7,
            }}
            className="fixed bottom-4 inset-x-0 mx-auto z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg w-[80%] max-w-md"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <h3 className="text-lg font-semibold mb-2">Install App</h3>
            <p className="text-sm text-gray-400">
              To install Burraq Digits app, tap the share button{" "}
              <span role="img" aria-label="share icon">
                ⎋
              </span>{" "}
              and then &ldquo;Add to Home Screen&rdquo;{" "}
              <span role="img" aria-label="plus icon">
                ➕
              </span>
            </p>
          </motion.div>
        ) : (
          deferredPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.7,
              }}
              className="fixed bottom-4 inset-x-0 mx-auto z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg w-[80%] max-w-md"
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 p-1 hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <h3 className="text-lg font-semibold mb-2">Install App</h3>
              <p className="text-sm text-gray-400 mb-3">
                Install our app for a better experience
              </p>
              <button
                onClick={handleInstallClick}
                className="bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent/90 transition-colors"
              >
                Install
              </button>
            </motion.div>
          )
        ))}
    </AnimatePresence>
  );
}
