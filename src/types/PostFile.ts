import { GrayMatterFile } from 'gray-matter'

interface PostFile {
  filename: string
  content: string
  matter: GrayMatterFile<string>
}

export default PostFile
