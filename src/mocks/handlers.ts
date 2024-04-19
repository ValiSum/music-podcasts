import { http, HttpResponse } from "msw";
import { podcastsMock, episodesMock } from "./mocks";

export const handlers = [
  http.get("*/raw", ({ request }) => {
    const url = new URL(request.url);
    const searchParam = url.searchParams.get("url");

    if (searchParam?.includes(`/us/rss`)) {
      return HttpResponse.json(podcastsMock);
    }

    if (searchParam?.includes(`/lookup`)) {
      return HttpResponse.json(episodesMock);
    }

    return HttpResponse.json({});
  }),
];
