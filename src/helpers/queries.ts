import { fetchPodcasts } from "@/api/iTunesApple";

export function loaderPodcastsQuery() {
  return {
    queryKey: ["podcasts"],
    queryFn: fetchPodcasts,
  };
}
