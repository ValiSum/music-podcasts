import { podcastsMapper, podcastMapper } from "@/helpers/mappers";
import { get } from "@/helpers/axios";

export async function fetchPodcasts(query?: string) {
  try {
    const { data } = await get("/us/rss/toppodcasts/limit=100/genre=1310/json");

    const dataMapped = podcastsMapper(data);
    if (query) {
      return dataMapped.filter((podcast) => {
        return (
          podcast.title.toLowerCase().includes(query.toLowerCase()) ||
          podcast.artist.toLowerCase().includes(query.toLowerCase())
        );
      });
    }

    return dataMapped;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch podcasts");
  }
}

export async function fetchPodcast(id: string) {
  try {
    const { data } = await get(`/lookup`, {
      params: {
        id,
        media: "podcast",
        entity: "podcastEpisode",
        limit: 20,
      },
    });

    return podcastMapper(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch podcast");
  }
}
