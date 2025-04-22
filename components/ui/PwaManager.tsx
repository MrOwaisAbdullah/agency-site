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
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
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
    if (displayCount < MAX_DISPLAYS && !wasManuallyClosed) {
      const newCount = displayCount + 1;
      setDisplayCount(newCount);
      localStorage.setItem("pwaDisplayCount", String(newCount));
      return true;
    }
    return false;
  }, [displayCount, wasManuallyClosed]);

  const showPrompt = useCallback(() => {
    if (!isVisible && updateDisplayCount()) {
      setIsVisible(true);
    }
  }, [isVisible, updateDisplayCount]);

  // Handle beforeinstallprompt event
  useEffect(() => {
    let installPromptTimer: NodeJS.Timeout;

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);

      // Add a small delay to ensure browser is ready
      installPromptTimer = setTimeout(() => {
        if (displayCount < MAX_DISPLAYS && !wasManuallyClosed) {
          showPrompt();
        }
      }, 1000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      clearTimeout(installPromptTimer);
    };
  }, [displayCount, wasManuallyClosed, showPrompt]);

  // Platform detection and standalone check
  useEffect(() => {
    const checkPlatform = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsIOS(
        /iphone|ipad|ipod/.test(userAgent) &&
          !("standalone" in window.navigator)
      );
      setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    };

    checkPlatform();
    window.addEventListener("resize", checkPlatform);

    return () => window.removeEventListener("resize", checkPlatform);
  }, []);

  // Online/Offline detection
  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
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
      isVisible
    )
      return;

    const showDelay = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
    const showTimer = setTimeout(showPrompt, showDelay);

    return () => clearTimeout(showTimer);
  }, [isIOS, wasManuallyClosed, displayCount, isVisible, showPrompt]);

  // Auto-hide logic
  useEffect(() => {
    if (!isVisible || wasManuallyClosed) return;

    const hideDelay = Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000;
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Schedule next show if needed
      if (displayCount < MAX_DISPLAYS && !wasManuallyClosed) {
        const reshowDelay =
          Math.floor(Math.random() * (18000 - 15000 + 1)) + 15000;
        setTimeout(showPrompt, reshowDelay);
      }
    }, hideDelay);

    return () => clearTimeout(hideTimer);
  }, [isVisible, wasManuallyClosed, displayCount, showPrompt]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setIsVisible(false);
        setWasManuallyClosed(true);
        localStorage.setItem("pwaDisplayCount", String(MAX_DISPLAYS));
        localStorage.setItem("wasManuallyClosed", "true");
      }
    } catch (error) {
      console.error("Install prompt error:", error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setWasManuallyClosed(true);
    localStorage.setItem("wasManuallyClosed", "true");
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
