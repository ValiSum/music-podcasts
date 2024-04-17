import { Podcast } from "@/interfaces/podcast";
import { Episode } from "@/interfaces/episode";
import { timeFormatter } from "./timeFormatter";
import { dateFormatter } from "./dateFormatter";

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
      summary: {
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
    summary: podcast.summary.label,
  }));
}

interface PodcastResponse {
  resultCount: number;
  results: {
    trackId: number;
    kind: "podcast" | "podcast-episode";
    trackName: string;
    releaseDate?: string;
    trackTimeMillis?: number;
    description?: string;
    episodeUrl: string;
  }[];
}

type Episodes = Episode[];

export function podcastMapper(podcast: PodcastResponse): Episodes {
  return podcast.results
    .filter((episode) => episode.kind === "podcast-episode")
    .map((episode) => ({
      id: episode.trackId,
      title: episode.trackName,
      date: dateFormatter(episode.releaseDate),
      duration: timeFormatter(episode.trackTimeMillis),
      description: episode?.description || "",
      source: episode.episodeUrl,
    }));
}
