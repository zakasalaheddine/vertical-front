import { HomePageFragment } from '../graphql/fragments/homePageFragment'
import { useFragment } from '../graphql/gql'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

export default function HomePage(props: { homePage: any }) {
  const homePage = useFragment(HomePageFragment, props.homePage)
  return (
    <>
      <Navbar logo={homePage.logo} />
      <Header
        headline={homePage.headline}
        thumbnail={homePage.thumbnail}
        excerpt={homePage.excerpt}
      />
      <Footer disclaimer={homePage.footerDisclaimer} logo={homePage.logo} />
    </>
  )
}
