import Head from 'next/head'
import { useDirectusFileUrl } from '../hooks/useDirectusFileUrl'

type SeoProps = {
  title: string
  description: string
  websiteUrl: string
  ogImage: any
  favicon: any
}

export default function Seo({
  title,
  description,
  ogImage,
  websiteUrl,
  favicon
}: SeoProps) {
  const ogImageSrc = useDirectusFileUrl(ogImage)
  const faviconSrc = useDirectusFileUrl(favicon)
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <link href={faviconSrc} rel="shortcut icon" type="image/x-icon" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageSrc} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={websiteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImageSrc} />
    </Head>
  )
}
