import { createClient, createPreviewSubscriptionHook } from "next-sanity"

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
}

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.")
}
if (!config.dataset) {
  throw Error("The dataset name is not set. Check your environment variables.")
}

export const usePreviewSubscription = createPreviewSubscriptionHook(config)

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
})

export const getClient = usePreview =>
  usePreview ? previewClient : sanityClient
