import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import layouts
import MainLayout from "@/layouts/MainLayout";
import PodcastLayout from "./layouts/PodcastLayout";

// Import pages
import ErrorBoundaryPage from "@/pages/ErrorBoundaryPage";
import PodcastsPage from "@/pages/PodcastsPage";
import PodcastPage from "@/pages/PodcastPage";
import EpisodePage from "@/pages/EpisodePage";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        path: "/",
        element: <PodcastsPage />,
      },
      {
        path: "podcast",
        element: <PodcastLayout />,
        children: [
          {
            path: ":podcastId",
            element: <PodcastPage />,
          },
          {
            path: ":podcastId/episode/:episodeId",
            element: <EpisodePage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
