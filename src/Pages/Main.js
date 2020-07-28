import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/find-repeat-number">find-repeat-number</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
