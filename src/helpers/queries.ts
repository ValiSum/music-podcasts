import { queryOptions } from "@tanstack/react-query";
import { fetchPodcasts, fetchPodcast } from "@/api/iTunesApple";

export const loaderPodcastsQuery = (q?: string) =>
  queryOptions({
    queryKey: ["podcasts", "list", q || ""],
    queryFn: () => fetchPodcasts(q),
  });

export const loaderPodcastQuery = (id: string) =>
  queryOptions({
    queryKey: ["podcasts", "detail", id],
    queryFn: () => fetchPodcast(id),
  });
