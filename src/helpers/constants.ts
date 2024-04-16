const corsProxy = import.meta.env.VITE_CORS_PROXY;
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const podcastsApiUrlEncoded = encodeURIComponent(
  `${apiBaseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`,
);
const podcastApiUrlEncoded = (id: string) =>
  encodeURIComponent(
    `${apiBaseUrl}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
  );

export const PODCASTS_API_URL = `${corsProxy}${podcastsApiUrlEncoded}`;
export const PODCAST_API_URL = (id: string) =>
  `${corsProxy}${podcastApiUrlEncoded(id)}`;
