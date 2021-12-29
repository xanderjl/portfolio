import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type Content = MDXRemoteSerializeResult<Record<string, unknown>>

export default Content
