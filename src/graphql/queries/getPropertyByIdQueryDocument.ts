import { graphql } from "../gql";

export const getPropertyByIdQueryDocument = graphql(/* GraphQL */ `
query property($id: ID!) {
	Property_by_id(id: $id) {
		...HomePageFragment
	}
}
`)