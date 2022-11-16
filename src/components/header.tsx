import Image from 'next/image'
import { useMemo } from 'react'
import { BACKEND_URL } from '../utils/constants'

export default function Header({ headline, thumbnail, excerpt }: any) {
  const thumbnailSrc = useMemo(() => {
    return `${BACKEND_URL}/assets/${thumbnail.id}/${thumbnail.filename_download}`
  }, [thumbnail.id, thumbnail.filename_download])
  return (
    <div className="h-[80vh] w-screen ">
      <div className="m-6 h-full overflow-hidden rounded-3xl relative drop-shadow-2xl">
        <Image
          src={thumbnailSrc}
          alt="Picture of the author"
          height={thumbnail.height}
          width={thumbnail.width}
          className="w-full"
        />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-black/70 flex flex-col px-10 justify-end pb-2">
          <h1 className="font-bold text-6xl text-white">{headline}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="py-6 text-2xl text-white"
          ></div>
        </div>
      </div>
    </div>
  )
}
