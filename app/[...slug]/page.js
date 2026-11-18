import { Suspense } from "react";

async function DestinationContent({ params, searchParams }) {
  const { slug } = await params;
  const query = await searchParams;

  const requestedPath = "/" + slug.join("/");

  return (
    <main
      style={{
        padding: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>New Application</h1>

      <h2>Successfully reached the destination!</h2>

      <p>Requested path: {requestedPath}</p>

      <p>Query parameters:</p>

      <pre>{JSON.stringify(query, null, 2)}</pre>
    </main>
  );
}

export default function DynamicPage({ params, searchParams }) {
  return (
    <Suspense
      fallback={
        <main
          style={{
            padding: "50px",
            fontFamily: "Arial",
          }}
        >
          <p>Loading destination...</p>
        </main>
      }
    >
      <DestinationContent params={params} searchParams={searchParams} />
    </Suspense>
  );
}
