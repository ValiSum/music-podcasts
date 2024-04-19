import { createBrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

// Import layouts
import MainLayout from "@/layouts/MainLayout";
import PodcastLayout from "@/layouts/PodcastLayout";

// Import pages
import ErrorBoundaryPage from "@/pages/ErrorBoundaryPage";
import PodcastsPage from "@/pages/PodcastsPage";
import PodcastPage from "@/pages/PodcastPage";
import EpisodePage from "@/pages/EpisodePage";

// Import loaders
import { podcastsLoader, podcastLoader } from "@/helpers/loaders";

export const createRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorBoundaryPage />,
      children: [
        {
          path: "/",
          element: <PodcastsPage />,
          loader: podcastsLoader(queryClient),
        },
        {
          path: "podcast",
          element: <PodcastLayout />,
          loader: podcastsLoader(queryClient),
          children: [
            {
              path: ":podcastId",
              element: <PodcastPage />,
              loader: podcastLoader(queryClient),
            },
            {
              path: ":podcastId/episode/:episodeId",
              element: <EpisodePage />,
              loader: podcastLoader(queryClient),
            },
          ],
        },
      ],
    },
  ]);
