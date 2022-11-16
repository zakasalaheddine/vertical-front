import { CodegenConfig } from '@graphql-codegen/cli'
import { GRAPHQL_API_URL } from './src/utils/constants'

const config: CodegenConfig = {
  schema: GRAPHQL_API_URL,
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
      plugins: []
    }
  }
}

export default config