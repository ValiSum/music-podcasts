import { queryOptions } from "@tanstack/react-query";
import { fetchPodcasts } from "@/api/iTunesApple";

export const loaderPodcastsQuery = (q?: string) =>
  queryOptions({
    queryKey: ["podcasts", "list", q || ""],
    queryFn: () => fetchPodcasts(q),
  });
