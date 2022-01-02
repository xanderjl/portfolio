import { SanityImageMetadata } from './Sanity'
import Url from './Url'
import {
  Projects as SanityProjects,
  Technology as SanityTechnology
} from './Sanity'

export interface Image {
  url?: Url
  metadata?: SanityImageMetadata
}

export interface Technology extends Omit<SanityTechnology, 'icon'> {
  icon?: {
    url?: Url
    metadata?: SanityImageMetadata
  }
}

export interface Project
  extends Omit<SanityProjects, 'image' | 'slug' | 'technologies'> {
  image?: Image
  slug?: string
  technologies?: Technology[]
}
