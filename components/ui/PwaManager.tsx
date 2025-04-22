"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

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

    // Initial delay to show the prompt (3-5 seconds)
    const initialDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
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

  // Effect for auto-hide and re-show behavior
  useEffect(() => {
    if (!isVisible || wasManuallyClosed) return;

    // Auto-hide after 5-8 seconds
    const hideDelay = Math.floor(Math.random() * (8000 - 5000 + 1)) + 5000;
    const hideTimeout = setTimeout(() => {
      if (!wasManuallyClosed) {
        setIsVisible(false);

        // Re-show after 10-12 seconds
        const reshowDelay =
          Math.floor(Math.random() * (12000 - 10000 + 1)) + 10000;
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
      setWasManuallyClosed(true); // Don't show again after installation
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setWasManuallyClosed(true); // Don't show again after manual close
  };

  if (isStandalone || !isVisible) return null;

  return (
    <>
      {!isOnline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-red-600 text-white rounded-lg shadow-lg">
          You are currently offline. Some features may be limited.
        </div>
      )}

      {isIOS ? (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg w-[80%] md:w-auto md:max-w-xs">
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
        </div>
      ) : (
        deferredPrompt && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg w-[80%] md:w-auto md:max-w-xs">
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
          </div>
        )
      )}
    </>
  );
}
