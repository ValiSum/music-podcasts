import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { podcastsMock } from "@/mocks/mocks";
import PodcastsPage from "./PodcastsPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { withTestWrapper } from "@/helpers/withTestWrapper";

const routes = [
  {
    path: "/",
    element: <PodcastsPage />,
    loader: () => Promise.resolve({ q: "" }),
  },
  {
    path: "/podcast/:podcastId",
    element: <div>Podcast View</div>,
  },
];

describe("PodcastsPage", () => {
  it("should render the PodcastsPage component with podcasts", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading podcasts...</div>}
      />,
      { wrapper: withTestWrapper() },
    );

    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading podcasts..."),
    );

    for (const podcast of podcastsMock.feed.entry) {
      expect(screen.getByText(podcast["im:name"].label)).toBeInTheDocument();
      expect(
        screen.getByText(`Author: ${podcast["im:artist"].label}`),
      ).toBeInTheDocument();
    }
  });

  it("should navigate to the Podcast View page", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading podcasts...</div>}
      />,
      { wrapper: withTestWrapper() },
    );

    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading podcasts..."),
    );

    const podcastsCard = screen.getAllByTestId("podcast-card");
    await userEvent.click(podcastsCard[1]);

    expect(screen.getByText("Podcast View")).toBeInTheDocument();
  });
});
