import { Outlet, Link, useNavigation } from "react-router-dom";
import { Spinner } from "@/components";

export default function MainLayout() {
  const { state } = useNavigation();

  return (
    <div className="grid h-screen grid-rows-[auto,1fr]">
      <nav className="top-0 z-10 flex items-center justify-between px-6 py-3 text-lg font-bold shadow-md">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-sky-600">Podcaster</h1>
          </Link>
        </div>

        {state !== "idle" && <Spinner />}
      </nav>
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
