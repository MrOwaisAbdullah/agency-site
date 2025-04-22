"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

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
    }
  };

  if (isStandalone) return null;

  return (
    <>
      {!isOnline && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-red-600 text-white rounded-lg shadow-lg">
          You are currently offline. Some features may be limited.
        </div>
      )}

      {isIOS ? (
        <div className="fixed bottom-4 left-4 z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-lg font-semibold mb-2">Install App</h3>
          <p className="text-sm text-gray-400">
            To install this app, tap the share button{" "}
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
          <div className="fixed bottom-4 left-4 z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg max-w-xs">
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
