const corsProxy = import.meta.env.VITE_CORS_PROXY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const PODCASTS_API_URL = `${corsProxy}${apiBaseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`;
export const PODCAST_API_URL = (podcastId: number) =>
  `${corsProxy}${apiBaseUrl}/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
