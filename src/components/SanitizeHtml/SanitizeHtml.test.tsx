import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import SanitizeHtml from "./SanitizeHtml";

describe("SanitizeHtml", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the SanitizeHtml component", async () => {
    const html = `<a href="" onclick="console.log('test')" href="">Click me</a>`;

    render(<SanitizeHtml html={html} />);

    await waitFor(() => {
      expect(screen.getByText("Click me")).toBeInTheDocument();
      expect(screen.getByText("Click me")).not.toHaveAttribute("onclick");
    });
  });
});
