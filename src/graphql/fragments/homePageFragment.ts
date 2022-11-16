import { graphql } from "../gql";

export const HomePageFragment = graphql(/* GraphQL */ `
  fragment HomePageFragment on Property {
    id
    name
    description
    logo {
      title
      filename_download
      height
      width
      id
    }
    favicon {
      filename_download
      id
    }
    headline
    thumbnail {
      title
      filename_download
      height
      width
      id
    }
    excerpt
    sections {
      id
      item {
        ... on compareSection {
          id
          section
        }
        ... on content {
          id
          content
        }
      }
    }
  }
`)