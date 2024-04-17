import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Import loading page
import LoadingPage from "@/pages/LoadingPage";

// Import layouts
import MainLayout from "@/layouts/MainLayout";
import PodcastLayout from "./layouts/PodcastLayout";

// Import pages
import ErrorBoundaryPage from "@/pages/ErrorBoundaryPage";
import PodcastsPage from "@/pages/PodcastsPage";
import PodcastPage from "@/pages/PodcastPage";
import EpisodePage from "@/pages/EpisodePage";

// Import loaders
import { podcastsLoader, podcastLoader } from "@/helpers/loaders";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const router = createBrowserRouter([
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

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
    </QueryClientProvider>
  );
}
