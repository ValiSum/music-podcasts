import { Outlet, Link } from "react-router-dom";
import { Loader } from "@/components";

export default function MainLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto,1fr]">
      <nav className="top-0 z-10 flex items-center justify-between border-b-2 px-6 py-3 text-lg font-bold">
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-sky-600">Podcaster</h1>
          </Link>
        </div>

        <Loader />
      </nav>

      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
