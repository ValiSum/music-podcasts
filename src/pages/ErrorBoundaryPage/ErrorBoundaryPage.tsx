import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundaryPage() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error("Unknown error:", error);
    errorMessage = "An unknown error occurred.";
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>
        Something went wrong. Please try again later or contact support if the
        problem persists.
      </p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
