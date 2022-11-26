import Image from 'next/image'
import Link from 'next/link'
import { useDirectusFileUrl } from '../hooks/useDirectusFileUrl'

export default function Footer({ disclaimer, logo }: any) {
  const logoSrc = useDirectusFileUrl(logo)
  return (
    <footer className="flex flex-col items-center justify-center my-8 mx-5">
      {logoSrc ? (
        <div className="h-16">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Picture of the author"
              height={logo.height}
              width={logo.width}
              className="h-full w-auto"
            />
          </Link>
        </div>
      ) : null}
      <div
        className="disclaimer text-xs text-center"
        dangerouslySetInnerHTML={{ __html: disclaimer }}
      ></div>
    </footer>
  )
}
