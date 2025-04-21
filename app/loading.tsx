import { PulsingLoader } from "@/components/ui/PulseLoader";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-md :bg-background">
      <PulsingLoader size="sm" color="accent" />
    </div>
  );
}
