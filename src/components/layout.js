import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

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

const Layout = ({ children }) => (
  <StaticQuery
    query={LAYOUT_QUERY}
    render={data => (
      <>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
            height: `100vh`,
          }}
        >
          {children}
          <footer>
            © MattRudin, MADE IN BASLE / LUCERNE
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
