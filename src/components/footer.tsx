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
      <nav className="mb-5">
        <ul className="flex flex-col items-center md:flex-row gap-3 text-xs">
          <li>
            <Link href="/privacy-policy">سياسات الخصوصية</Link>
          </li>
          <li>
            <Link href="/terms-conditions">شروط الإستخدام</Link>
          </li>
          <li>
            <Link href="/affiliate-disclaimer">سياسة التسويق بالعمولة</Link>
          </li>
        </ul>
      </nav>
      <div
        className="disclaimer text-xs text-center"
        dangerouslySetInnerHTML={{ __html: disclaimer }}
      ></div>
    </footer>
  )
}
