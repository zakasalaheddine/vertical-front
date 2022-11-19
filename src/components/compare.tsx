export default function CompareSection({ section }: any) {
  if (typeof window === undefined) return null
  return <div dangerouslySetInnerHTML={{ __html: section }}></div>
}
