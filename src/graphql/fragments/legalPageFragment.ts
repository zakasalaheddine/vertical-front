import { graphql } from "../gql";

export const LegalPageFragment = graphql(/* GraphQL */ `
  fragment LegalPageFragment on Property {
    id
		name
		description
		ogImage{
			id
			filename_download
		}
		website
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
		footerDisclaimer
		PrivacyPolicy
		TermsConditions
		AffiliateDisclosure
  }
`)