import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import LegalPage from '../components/legalPage'
import { getLegalPageByPropertyIdRequest } from '../requests/getLegalPageContentRequest'

export default function PrivacyPolicy() {
  const { data, isLoading } = useQuery({
    queryKey: ['PrivacyPolicy'],
    queryFn: getLegalPageByPropertyIdRequest
  })

  if (isLoading) return <div className="loading">Loading...</div>
  return (
    <LegalPage
      data={data?.Property_by_id}
      selectedKey="PrivacyPolicy"
      headline="سياسات الخصوصية"
    />
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['PrivacyPolicy'],
    queryFn: getLegalPageByPropertyIdRequest
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
