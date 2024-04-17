import { type QueryClient } from "@tanstack/react-query";
import { loaderPodcastsQuery, loaderPodcastQuery } from "@/helpers/queries";
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

type PodcastLoaderFunctionReturn = Promise<{ podcastId: string }>;

export function podcastLoader(queryClient: QueryClient) {
  return async function ({
    params,
  }: LoaderFunctionArgs): PodcastLoaderFunctionReturn {
    if (!params.podcastId) {
      throw new Error("No podcast ID provided");
    }
    await queryClient.ensureQueryData(loaderPodcastQuery(params.podcastId));
    return { podcastId: params.podcastId };
  };
}
