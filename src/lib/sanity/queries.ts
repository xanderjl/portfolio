import { groq } from 'next-sanity'
export const projectsQuery = groq`
  *[_type == "projects" && !(_id in path("drafts.**"))]{
    title,
    "slug": slug.current,
    description,
    "image": image.asset->{
      metadata,
      url
    },
    projectUrl,
    repoUrl,
    technologies
  }
`

export const projectQuery = groq`
  *[_type == "projects" && slug.current == $slug]{
    title,
    "slug": slug.current,
    description,
    "image": image.asset->{
      metadata,
      url
    },
    projectUrl,
    repoUrl,
    technologies
  }
`
