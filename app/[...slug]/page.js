export default async function DynamicPage({ params, searchParams }) {
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
