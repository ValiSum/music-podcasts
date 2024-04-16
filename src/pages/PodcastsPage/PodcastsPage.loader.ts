import { type QueryClient } from "@tanstack/react-query";
import { loaderPodcastsQuery } from "@/helpers/queries";
import { LoaderFunctionArgs } from "react-router-dom";

type LoaderFunctionReturn = Promise<{ q: string }>;

export function loader(queryClient: QueryClient) {
  return async function ({
    request,
  }: LoaderFunctionArgs): LoaderFunctionReturn {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
    await queryClient.ensureQueryData(loaderPodcastsQuery(q));
    return { q };
  };
}
