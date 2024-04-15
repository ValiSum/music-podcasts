import { QueryClient } from "@tanstack/react-query";
import { loaderPodcastsQuery } from "@/helpers/queries";

export function loader(queryClient: QueryClient) {
  return async function () {
    const query = loaderPodcastsQuery();

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
}
