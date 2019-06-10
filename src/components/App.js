/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home, About, Topics } from 'components/pages'
import GlobalStyles from 'lib/style'

function BasicExample() {
  const menus = [
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/about',
      name: 'About',
    },
    {
      to: '/topics',
      name: 'Topics',
    },
  ]

  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="container">
        <Router>
          <div>
            <ul>
              {menus.map((menu, idx) => (
                <li
                  key={idx}
                  css={{
                    display: 'inline-block',
                    padding: 'var(--space-xs)',
                  }}
                >
                  <Link to={menu.to}>{menu.name}</Link>
                </li>
              ))}
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    </React.Fragment>
  )
}
export default BasicExample
