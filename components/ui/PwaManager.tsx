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

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window)
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Initial delay to show the prompt (5-7 seconds for more natural timing)
    const initialDelay = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;
    const showTimeout = setTimeout(() => {
      if (!wasManuallyClosed) {
        setIsVisible(true);
      }
    }, initialDelay);

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Handle online/offline status
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      clearTimeout(showTimeout);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, [wasManuallyClosed]);

  // Effect for auto-hide and re-show behavior with more natural timing
  useEffect(() => {
    if (!isVisible || wasManuallyClosed) return;

    // Auto-hide after 8-10 seconds (increased from 5-8)
    const hideDelay = Math.floor(Math.random() * (10000 - 6000 + 1)) + 6000;
    const hideTimeout = setTimeout(() => {
      if (!wasManuallyClosed) {
        setIsVisible(false);

        // Re-show after 15-18 seconds (increased from 10-12)
        const reshowDelay =
          Math.floor(Math.random() * (18000 - 15000 + 1)) + 15000;
        const reshowTimeout = setTimeout(() => {
          if (!wasManuallyClosed) {
            setIsVisible(true);
          }
        }, reshowDelay);

        return () => clearTimeout(reshowTimeout);
      }
    }, hideDelay);

    return () => clearTimeout(hideTimeout);
  }, [isVisible, wasManuallyClosed]);

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

  if (isStandalone) return null;

  return (
    <AnimatePresence mode="wait">
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            type: "spring",
            stiffness: 100, // Reduced from 260 for smoother motion
            damping: 15, // Reduced from 20 for slight bounce
            duration: 0.7, // Added duration for more controlled animation
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
              stiffness: 100, // Reduced for smoother motion
              damping: 15, // Reduced for slight bounce
              duration: 0.7, // Added duration for more controlled animation
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
                stiffness: 100, // Reduced for smoother motion
                damping: 15, // Reduced for slight bounce
                duration: 0.7, // Added duration for more controlled animation
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
