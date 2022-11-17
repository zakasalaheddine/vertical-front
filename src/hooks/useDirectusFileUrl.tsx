import { useMemo } from 'react'
import { BACKEND_URL } from '../utils/constants'

type DirectusFile =
  | {
      __typename?: 'directus_files' | undefined
      title?: string | null | undefined
      filename_download: string
      height?: number | null | undefined
      width?: number | null | undefined
      id: string
    }
  | null
  | undefined

export const useDirectusFileUrl = (fileObject: DirectusFile) => {
  return useMemo(() => {
    if (!fileObject) return
    return `${BACKEND_URL}/assets/${fileObject.id}/${fileObject.filename_download}`
  }, [fileObject])
}
