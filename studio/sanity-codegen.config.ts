import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: '../src/types/Sanity.ts'
}

export default config
