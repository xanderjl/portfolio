import path from 'path'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import PostFile from 'types/PostFile'

const getPostFiles = async (): Promise<PostFile[]> => {
  const postsDir = path.join(process.cwd(), './src/posts')
  const filenames = await fs.readdir(postsDir)
  const files: PostFile[] = await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDir, filename)
      const content = await fs.readFile(filePath, 'utf-8')
      const matter = grayMatter(content)

      return {
        filename,
        content,
        matter
      }
    })
  )

  return files
}

export default getPostFiles
