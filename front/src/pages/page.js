import React from "react"
import { graphql } from "gatsby"

export default props => {
  const { pageBy: page } = props.data.wpgraphql

  return (
    <>
      <h1>{page.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: page.content }}></p>
    </>
  )
}

export const query = graphql`
  query($pageId: Int!) {
    wpgraphql {
      pageBy(pageId: $pageId) {
        title
        content
      }
    }
  }
`
