import { PulsingLoader } from "@/components/ui/PulseLoader";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center backdrop-blur-md bg-background">
      <div className="relative w-24 h-24 mb-8">
        <Image
          src="/assets/logo.png"
          alt="Burraq Digits Logo"
          width={300}
          height={150}
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
      <PulsingLoader size="sm" color="accent" />
      <p className="mt-4 text-gray-400">Loading resources...</p>
    </div>
  );
}
