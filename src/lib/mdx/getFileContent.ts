import path from 'path'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Content from 'types/Content'

interface piss {
  content: Content
  frontMatter: { [key: string]: any }
}

const getFileContent = async (id: string): Promise<piss> => {
  const postsDir = path.join(process.cwd(), './src/posts')
  const filename = id + '.mdx'
  const filePath = path.join(postsDir, filename)
  const rawContent = await fs.readFile(filePath, 'utf-8')
  const content = await serialize(rawContent)
  const rawMatter = grayMatter(rawContent)
  const frontMatter = rawMatter.data

  return { content, frontMatter }
}

export default getFileContent
