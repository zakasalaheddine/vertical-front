import { HomePageFragment } from '../graphql/fragments/homePageFragment'
import { useFragment } from '../graphql/gql'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'
import Content from './content'
import CompareSection from './compare'
import Seo from './seo'

export default function HomePage(props: { homePage: any }) {
  const homePage = useFragment(HomePageFragment, props.homePage)
  return (
    <>
      <Seo
        title={homePage.name || ''}
        description={homePage.description || ''}
        websiteUrl={homePage.website || ''}
        ogImage={homePage.ogImage}
      />
      <Navbar logo={homePage.logo} />
      <Header
        headline={homePage.headline}
        thumbnail={homePage.thumbnail}
        excerpt={homePage.excerpt}
      />
      {homePage.sections?.map((entry, idx) => {
        if (entry?.item?.__typename === 'content')
          return <Content data={entry?.item?.content} key={`section__${idx}`} />

        if (entry?.item?.__typename === 'compareSection')
          return (
            <CompareSection
              section={entry?.item?.section}
              key={`section__${idx}`}
            />
          )
        return null
      })}

      <Footer disclaimer={homePage.footerDisclaimer} logo={homePage.logo} />
    </>
  )
}
