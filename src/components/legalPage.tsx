import { useFragment } from '../graphql/gql'
import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import { LegalPageFragment } from '../graphql/fragments/legalPageFragment'
import Seo from './seo'

type LegalPageProps = {
  data: any
  selectedKey: 'PrivacyPolicy' | 'TermsConditions' | 'AffiliateDisclosure'
  headline: string
}

export default function LegalPage({
  data,
  selectedKey,
  headline
}: LegalPageProps) {
  const legalPage = useFragment(LegalPageFragment, data)
  const pageContent = legalPage[selectedKey]
  const { logo, footerDisclaimer } = legalPage
  return (
    <>
      <Seo
        title={`${legalPage.name} | ${headline}` || ''}
        description={legalPage.description || ''}
        websiteUrl={legalPage.website || ''}
        ogImage={legalPage.ogImage}
        favicon={legalPage.favicon}
      />
      <Navbar logo={logo} />
      <h1 className="text-center text-5xl font-bold">{headline}</h1>
      <Content data={pageContent} />
      <Footer disclaimer={footerDisclaimer} logo={logo} />
    </>
  )
}
