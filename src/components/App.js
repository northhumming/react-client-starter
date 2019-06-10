import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Home, About, Topics } from 'components/pages'
import { GlobalStyles } from 'lib/style'

function BasicExample() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="container">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
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
