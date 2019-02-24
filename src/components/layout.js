import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components' 
import Footer from './footer'
import { GlobalStyle, gridAreaSelectors, mediaMin600px} from './layoutUtility'

const LAYOUT_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `


const LayoutWrapper = styled.div`
${gridAreaSelectors}
${mediaMin600px}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={LAYOUT_QUERY}
    render={data => (
      <LayoutWrapper>
        <GlobalStyle />
        {children}
        <Footer />
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
