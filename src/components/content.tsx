import styled from 'styled-components'

export default function Content({ data }: any) {
  return <ContentSection dangerouslySetInnerHTML={{ __html: data }} className="container max-w-4xl mx-auto my-6"></ContentSection>
}

const ContentSection = styled.section`
  
  h2 {
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  p{
    line-height: 1.8;
  }
`
