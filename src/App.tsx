import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import loading page
import LoadingPage from "@/pages/LoadingPage";

// Import layouts
import MainLayout from "@/layouts/MainLayout";
import PodcastLayout from "./layouts/PodcastLayout";

// Import pages
import ErrorBoundaryPage from "@/pages/ErrorBoundaryPage";
import PodcastsPage, {
  loader as podcastsPageLoader,
} from "@/pages/PodcastsPage";
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
        loader: podcastsPageLoader,
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
  return <RouterProvider router={router} fallbackElement={<LoadingPage />} />;
}
