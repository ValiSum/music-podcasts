import { fetchPodcasts } from "@/api/iTunesApple";

export async function loader() {
  const data = await fetchPodcasts();
  return data;
}
