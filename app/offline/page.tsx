import Image from "next/image";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#212428]">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/assets/logo.png"
            alt="Burraq Digits Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-white">
          You&apos;re Offline
        </h1>
        <p className="text-gray-400 mb-8">
          Please check your internet connection and try again.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
