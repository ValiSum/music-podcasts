import { PODCASTS_API_URL } from "@/helpers/constants";
import { podcastsMapper } from "@/helpers/mappers";

export async function fetchPodcasts(query?: string) {
  try {
    const response = await fetch(PODCASTS_API_URL);
    const data = await response.json();
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
