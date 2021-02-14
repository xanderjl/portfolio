export const fetchSanityContent = async ({ query, variables = {} }) => {
  const data = await fetch(
    `https://${process.env.SANITY_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  ).then((res) => res.json())

  return data
}
