import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import LegalPage from '../components/legalPage'
import { getLegalPageByPropertyIdRequest } from '../requests/getLegalPageContentRequest'

export default function AffiliateDisclosure() {
  const { data, isLoading } = useQuery({
    queryKey: ['AffiliateDisclosure'],
    queryFn: getLegalPageByPropertyIdRequest
  })

  if (isLoading) return <div className="loading">Loading...</div>
  return (
    <LegalPage
      data={data?.Property_by_id}
      selectedKey="AffiliateDisclosure"
      headline="سياسة التسويق بالعمولة"
    />
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['AffiliateDisclosure'],
    queryFn: getLegalPageByPropertyIdRequest
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
