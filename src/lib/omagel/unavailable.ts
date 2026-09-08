// Do not import matchmaking here: retired endpoints must not access chat state.
export function omagelUnavailable() {
  return Response.json(
    { success: false, error: "Omagel Mini is unavailable. Text and video chat have been withdrawn." },
    {
      status: 410,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    },
  );
}
