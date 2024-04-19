import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { podcastsMock } from "./mocks/mocks";
import App from "./App";

describe("App", () => {
  it("should render the App component with podcasts", async () => {
    render(<App />);

    await waitForElementToBeRemoved(() => screen.getByText("Loading app..."));

    for (const podcast of podcastsMock.feed.entry) {
      expect(screen.getByText(podcast["im:name"].label)).toBeInTheDocument();
      expect(
        screen.getByText(`Author: ${podcast["im:artist"].label}`),
      ).toBeInTheDocument();
    }
  });
});
