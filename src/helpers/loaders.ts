import { type QueryClient } from "@tanstack/react-query";
import { loaderPodcastsQuery } from "@/helpers/queries";
import { LoaderFunctionArgs } from "react-router-dom";

type PodcastsLoaderFunctionReturn = Promise<{ q: string }>;

export function podcastsLoader(queryClient: QueryClient) {
  return async function ({
    request,
  }: LoaderFunctionArgs): PodcastsLoaderFunctionReturn {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
    await queryClient.ensureQueryData(loaderPodcastsQuery(q));
    return { q };
  };
}
