import { PulsingLoader } from "@/components/ui/PulseLoader";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center backdrop-blur-md bg-background">
      <div className="relative w-24 h-24 mb-8">
        <img
          src="/assets/logo.png"
          alt="Burraq Digits Logo"
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <PulsingLoader size="sm" color="accent" />
      <p className="mt-4 text-gray-400">Loading resources...</p>
    </div>
  );
}
