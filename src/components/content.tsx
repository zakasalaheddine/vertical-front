import styled from 'styled-components'

export default function Content({ data }: any) {
  return (
    <ContentSection
      dangerouslySetInnerHTML={{ __html: data }}
      className="container max-w-4xl mx-auto my-6 px-3 md:px-0"
    ></ContentSection>
  )
}

const ContentSection = styled.section`
  h2 {
    font-size: 26px;
    margin-bottom: 12px;
    font-weight: bold;
  }
  h3{
    font-size: 22px;
    margin-bottom: 12px;
    font-weight: bold;
  }
  p {
    line-height: 1.8;
    margin-bottom: 10px;
  }
`
