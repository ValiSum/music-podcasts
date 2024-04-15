import { Loader } from "@/components";

export default function LoadingPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Loader />
      <p className="p-4">Loading app...</p>
    </main>
  );
}
