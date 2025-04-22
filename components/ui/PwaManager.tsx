"use client";

import { useState, useEffect } from "react";
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

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [wasManuallyClosed, setWasManuallyClosed] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window)
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Only show if we haven't reached the display limit
    if (displayCount < 3 && !wasManuallyClosed) {
      // Initial delay to show the prompt (5-7 seconds)
      const initialDelay = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
      const showTimeout = setTimeout(() => {
        setIsVisible(true);
        setDisplayCount((prev) => prev + 1);
      }, initialDelay);

      return () => clearTimeout(showTimeout);
    }
  }, [wasManuallyClosed, displayCount]);

  // Effect for auto-hide and re-show behavior
  useEffect(() => {
    if (!isVisible || wasManuallyClosed || displayCount >= 3) return;

    // Auto-hide after 8-10 seconds
    const hideDelay = Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000;
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);

      // Only schedule re-show if we haven't reached display limit
      if (displayCount < 3) {
        // Re-show after 15-18 seconds
        const reshowDelay =
          Math.floor(Math.random() * (18000 - 15000 + 1)) + 15000;
        const reshowTimeout = setTimeout(() => {
          if (!wasManuallyClosed) {
            setIsVisible(true);
            setDisplayCount((prev) => prev + 1);
          }
        }, reshowDelay);

        return () => clearTimeout(reshowTimeout);
      }
    }, hideDelay);

    return () => clearTimeout(hideTimeout);
  }, [isVisible, wasManuallyClosed, displayCount]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleOnlineStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setWasManuallyClosed(true);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setWasManuallyClosed(true);
  };

  if (isStandalone || displayCount >= 3) return null;

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
