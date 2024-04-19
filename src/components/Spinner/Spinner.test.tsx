import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import Spinner from "./Spinner";

describe("Spinner", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render the Spinner component", () => {
    render(<Spinner />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
