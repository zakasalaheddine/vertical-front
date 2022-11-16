import { graphql } from "../gql";

export const getPropertyByIdQueryDocument = graphql(/* GraphQL */ `
query property($id: ID!) {
	Property_by_id(id: $id) {
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
}
`)