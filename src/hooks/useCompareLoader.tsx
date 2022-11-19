import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useCompareLoader = () => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.runZakaLoader as any) {
        window.runZakaLoader()
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
