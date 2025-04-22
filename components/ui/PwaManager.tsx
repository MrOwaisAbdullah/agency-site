"use client";

import { useState, useEffect } from "react";
import {
  subscribeUser,
  unsubscribeUser,
  sendNotification,
} from "@/app/actions/pushNotifications";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      });
      const sub = await registration.pushManager.getSubscription();
      setSubscription(sub);
    } catch (error) {
      console.error("Service worker registration failed:", error);
    }
  }

  async function subscribeToPush() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
        ),
      });
      setSubscription(sub);
      const serializedSub = JSON.parse(JSON.stringify(sub));
      await subscribeUser(serializedSub);
    } catch (error) {
      console.error("Failed to subscribe to push:", error);
    }
  }

  async function unsubscribeFromPush() {
    try {
      await subscription?.unsubscribe();
      setSubscription(null);
      await unsubscribeUser();
    } catch (error) {
      console.error("Failed to unsubscribe from push:", error);
    }
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification(message);
      setMessage("");
    }
  }

  if (!isSupported) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-background border border-gray-800 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Push Notifications</h3>
      {subscription ? (
        <>
          <p className="text-sm text-gray-400 mb-2">
            You are subscribed to notifications
          </p>
          <button
            onClick={unsubscribeFromPush}
            className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
          >
            Unsubscribe
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-400 mb-2">
            Enable notifications to stay updated
          </p>
          <button
            onClick={subscribeToPush}
            className="bg-accent text-white px-4 py-2 rounded-md text-sm hover:bg-accent/90 transition-colors"
          >
            Subscribe
          </button>
        </>
      )}
    </div>
  );
}

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Handle PWA install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    // Handle online/offline status
    const handleOnlineStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
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
            To install this app, tap the share button
            <span role="img" aria-label="share icon">
              {" "}
              ⎋{" "}
            </span>
            and then "Add to Home Screen"
            <span role="img" aria-label="plus icon">
              {" "}
              ➕{" "}
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
