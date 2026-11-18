// export default async function DynamicPage({ params, searchParams }) {
//   const { slug } = await params;
//   const query = await searchParams;

//   const requestedPath = "/" + slug.join("/");

//   return (
//     <main
//       style={{
//         padding: "50px",
//         fontFamily: "Arial",
//       }}
//     >
//       <h1>New Application</h1>

//       <h2>Successfully reached the destination!</h2>

//       <p>Requested path: {requestedPath}</p>

//       <p>Query parameters:</p>

//       <pre>{JSON.stringify(query, null, 2)}</pre>
//     </main>
//   );
// }

export default async function DynamicPage({ params, searchParams }) {
  const resolvedParams = await params;
  const query = await searchParams;

  // Fallback to an empty array if using an optional catch-all route ([[...slug]])
  // where slug might be undefined at the root path.
  const slug = resolvedParams.slug ?? [];
  const requestedPath = "/" + slug.join("/");

  const hasQueryParams = Object.keys(query).length > 0;

  return (
    <main
      style={{
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "10px" }}>New Application</h1>
      <h2
        style={{ color: "#0070f3", fontSize: "1.25rem", marginBottom: "20px" }}
      >
        Successfully reached the destination!
      </h2>

      <p>
        <strong>Requested path:</strong> <code>{requestedPath}</code>
      </p>

      <div style={{ marginTop: "20px" }}>
        <p style={{ marginBottom: "5px" }}>
          <strong>Query parameters:</strong>
        </p>
        <pre
          style={{
            background: "#f4f4f4",
            padding: "15px",
            borderRadius: "6px",
            overflowX: "auto",
            fontSize: "0.9rem",
            border: "1px solid #eaeaea",
          }}
        >
          {hasQueryParams ? JSON.stringify(query, null, 2) : "None provided"}
        </pre>
      </div>
    </main>
  );
}
