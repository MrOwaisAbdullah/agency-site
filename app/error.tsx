"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-4">
        Something went wrong!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
