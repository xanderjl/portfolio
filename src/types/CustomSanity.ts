import { SanityImageMetadata } from './Sanity'
import Url from './Url'
import { Projects as SanityProjects } from './Sanity'

export interface Image {
  url: Url
  metadata: SanityImageMetadata
}

export type Project = Omit<SanityProjects, 'image' | 'slug'> & {
  image: Image
  slug: string
}
