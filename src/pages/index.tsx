import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import HomePage from '../components/homePage'
import { getPropertyByIdRequest } from '../requests/getPropertyByIdRequest'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['property'],
    queryFn: getPropertyByIdRequest
  })

  if (isLoading) return <div className="loading">Loading...</div>

  return <HomePage homePage={data?.Property_by_id} />
}

export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['property'],
    queryFn: getPropertyByIdRequest
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
