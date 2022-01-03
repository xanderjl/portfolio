import path from 'path'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'

interface piss {
  content: string
  frontMatter: { [key: string]: any }
}

const getFileContent = async (id: string): Promise<piss> => {
  const postsDir = path.join(process.cwd(), './src/posts')
  const filename = id + '.mdx'
  const filePath = path.join(postsDir, filename)
  const content = await fs.readFile(filePath, 'utf-8')
  const rawMatter = grayMatter(content)
  const frontMatter = rawMatter.data

  return { content, frontMatter }
}

export default getFileContent
