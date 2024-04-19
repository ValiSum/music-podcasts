import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { episodesMock } from "@/mocks/mocks";
import PodcastPage from "./PodcastPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { withTestWrapper } from "@/helpers/withTestWrapper";

const routes = [
  {
    path: "/podcast/:podcastId",
    element: <PodcastPage />,
    loader: () => Promise.resolve({ q: "" }),
  },
  {
    path: "/podcast/:podcastId/episode/:episodeId",
    element: <div>Episode View</div>,
  },
];

describe("PodcastPage", () => {
  it("should render the PodcastPage component with episodes", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/podcast/1200361736"],
    });
    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading...</div>}
      />,
      { wrapper: withTestWrapper() },
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    expect(
      screen.getByText(`Episodes: ${episodesMock.resultCount - 1}`),
    ).toBeInTheDocument();
    const episodesWithouFirst = episodesMock.results.slice(1);
    for (const episode of episodesWithouFirst) {
      expect(screen.getByText(episode.trackName)).toBeInTheDocument();
    }
  });

  it("should navigate to the Episode View page", async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/podcast/1200361736"],
    });
    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading...</div>}
      />,
      { wrapper: withTestWrapper() },
    );

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    const episodeLinks = screen.getAllByTestId("episode-link");
    await userEvent.click(episodeLinks[3]);

    expect(screen.getByText("Episode View")).toBeInTheDocument();
  });
});
