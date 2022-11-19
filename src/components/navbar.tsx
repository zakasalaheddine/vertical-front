import Image from 'next/image'
import Link from 'next/link'
import { useDirectusFileUrl } from '../hooks/useDirectusFileUrl'

export default function Navbar({ logo }: any) {
  const logoSrc = useDirectusFileUrl(logo)

  return (
    <div className="container mx-auto flex items-center justify-center h-16">
      {logoSrc ? (
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Picture of the author"
            height={logo.height}
            width={logo.width}
            className="h-full w-auto"
          />
        </Link>
      ) : null}
    </div>
  )
}
