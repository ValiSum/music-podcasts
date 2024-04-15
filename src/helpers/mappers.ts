import { Podcast } from "@/interfaces/podcast";

interface PodcastsResponse {
  feed: {
    entry: {
      "im:name": {
        label: string;
      };
      "im:image": {
        label: string;
      }[];
      id: {
        attributes: {
          "im:id": string;
        };
      };
      "im:artist": {
        label: string;
      };
    }[];
  };
}

type Podcasts = Podcast[];

export function podcastsMapper(podcasts: PodcastsResponse): Podcasts {
  return podcasts.feed.entry.map((podcast) => ({
    id: podcast.id.attributes["im:id"],
    title: podcast["im:name"].label,
    image: podcast["im:image"][2].label,
    artist: podcast["im:artist"].label,
  }));
}
