import PostFile from 'types/PostFile'

const getTags = (files: PostFile[]): string[] => {
  const tmp: string[] = []

  files.map(file => {
    file.matter.data.tags.map((tag: string) => {
      tmp.push(tag)
    })
  })

  const tags = [...new Set(tmp)]

  return tags
}

export default getTags
