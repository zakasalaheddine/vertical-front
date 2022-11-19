import { graphql } from "../gql";

export const getLegalPageByPropertyIdQueryDocument = graphql(/* GraphQL */ `
query legalPage($id: ID!) {
	Property_by_id(id: $id) {
		...LegalPageFragment
	}
}
`)