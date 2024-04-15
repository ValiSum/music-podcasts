import { PODCASTS_API_URL } from "@/helpers/constants";
import { podcastsMapper } from "@/helpers/mappers";

export async function fetchPodcasts() {
  try {
    const response = await fetch(PODCASTS_API_URL);
    const data = await response.json();
    return podcastsMapper(data);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch podcasts");
  }
}
