import Image from 'next/image'
import { useDirectusFileUrl } from '../hooks/useDirectusFileUrl'

export default function Header({ headline, thumbnail, excerpt }: any) {
  const thumbnailSrc = useDirectusFileUrl(thumbnail)
  return (
    <header className="md:h-[80vh] w-screen mb-6">
      <div className="m-6 md:h-full overflow-hidden rounded-3xl relative drop-shadow-2xl">
        {thumbnailSrc ? (
          <Image
            src={thumbnailSrc}
            alt="Picture of the author"
            height={thumbnail.height}
            width={thumbnail.width}
            className="w-full"
            priority
          />
        ) : null}
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-black/70 flex flex-col px-3 md:px-10 justify-end pb-2">
          <h1 className="font-bold text-2xl md:text-6xl text-white">
            {headline}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: excerpt }}
            className="py-6 hidden md:block md:text-2xl text-white"
          ></div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: excerpt }}
        className="pb-6 block md:hidden md:text-2xl text-black px-3"
      ></div>
    </header>
  )
}
