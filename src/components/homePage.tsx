import { HomePageFragment } from '../graphql/fragments/homePageFragment'
import { FragmentType, useFragment } from '../graphql/gql'
import Header from './header'
import Navbar from './navbar'

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
    </>
  )
}
