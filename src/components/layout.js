import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'
import Footer from './footer'
import { gridAreaSelectors, mediaMin600px } from './layoutUtility'

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
  font-family: sans-serif;
  font-size: 80%;
  color: #373737;

  h1 {
    font-family: Segoe UI;
    font-weight: 700;
    font-size: 2em;
  }

  a {
    text-decoration: none;
    color: #000066;
  }
  
  ${gridAreaSelectors}
  ${mediaMin600px}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={LAYOUT_QUERY}
    render={data => (
      <>
        <LayoutWrapper>
          {children}
          <Footer />
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
