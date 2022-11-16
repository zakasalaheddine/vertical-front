import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getPropertyByIdRequest } from '../requests/getPropertyByIdRequest'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['property'],
    queryFn: getPropertyByIdRequest
  })

  useEffect(() => {
    if (isLoading) {
      console.log('Loading')
    } else {
      console.log({ data: data?.Property_by_id?.id })
    }
  }, [isLoading, data])
  return <div className="container text-2xl">Hello</div>
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
