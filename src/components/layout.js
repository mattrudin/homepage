import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1 {
    font-family: Segoe UI;
    font-weight: 700;
    font-size: 2em;
  }
  @media only screen and (min-width: 600px) {
    font-size: 120%;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={LAYOUT_QUERY}
    render={data => (
      <>
        <LayoutWrapper>
          {children}
          <footer>
            <p>© MattRudin, MADE IN BASLE / LUCERNE</p>
          </footer>
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
