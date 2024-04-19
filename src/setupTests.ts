import { expect, beforeAll, afterEach, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { server } from "@/mocks/server";

expect.extend(matchers);

server.events.on("request:start", ({ request }) => {
  console.log("Outgoing:", request.method, request.url);
});

afterEach(() => {
  cleanup();
});
beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
