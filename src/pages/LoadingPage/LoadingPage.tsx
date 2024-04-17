import { Spinner } from "@/components";

export default function LoadingPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Spinner />
      <p className="p-4">Loading app...</p>
    </main>
  );
}
