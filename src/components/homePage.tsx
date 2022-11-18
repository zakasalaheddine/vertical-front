import { HomePageFragment } from '../graphql/fragments/homePageFragment'
import { useFragment } from '../graphql/gql'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import Content from './content'

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
      {homePage.sections?.map((entry, idx) => {
        if (entry?.item?.__typename === 'content')
          return <Content data={entry?.item?.content} key={`section__${idx}`} />
        return null
      })}

      <Footer disclaimer={homePage.footerDisclaimer} logo={homePage.logo} />
    </>
  )
}
