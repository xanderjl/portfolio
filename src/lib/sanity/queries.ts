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
