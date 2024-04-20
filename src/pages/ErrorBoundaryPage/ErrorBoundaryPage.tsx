import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorBoundaryPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "";
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div
      id="error-page"
      className="mx-auto flex h-screen max-w-xl items-center"
    >
      <div className="flex h-min w-full flex-col gap-4 rounded-md border p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="italic">Sorry, an unexpected error has occurred.</p>
        <p className="italic">{errorMessage}</p>
        <Link
          to="/"
          reloadDocument
          className="text-sky-600 hover:underline active:text-sky-800"
        >
          Go to home page
        </Link>
      </div>
    </div>
  );
}
