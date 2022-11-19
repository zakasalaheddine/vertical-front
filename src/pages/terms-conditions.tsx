import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import LegalPage from '../components/legalPage'
import { getLegalPageByPropertyIdRequest } from '../requests/getLegalPageContentRequest'

export default function TermsConditions() {
  const { data, isLoading } = useQuery({
    queryKey: ['TermsConditions'],
    queryFn: getLegalPageByPropertyIdRequest
  })

  if (isLoading) return <div className="loading">Loading...</div>
  return (
    <LegalPage
      data={data?.Property_by_id}
      selectedKey="TermsConditions"
      headline="شروط الإستخدام"
    />
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['TermsConditions'],
    queryFn: getLegalPageByPropertyIdRequest
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
