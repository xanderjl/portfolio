import { createClient } from "@formium/client"

const formium = createClient(process.env.NEXT_PUBLIC_FORMIUM_PROJECT_ID, {
  apiToken: process.env.NEXT_FORMIUM_API_TOKEN,
})

export default formium
