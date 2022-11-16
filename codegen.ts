import { CodegenConfig } from '@graphql-codegen/cli'
import { GRAPHQL_API_URL } from './utils/constants'

const config: CodegenConfig = {
  schema: GRAPHQL_API_URL,
  documents: ['./**/*.tsx', './graphql/queries/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config