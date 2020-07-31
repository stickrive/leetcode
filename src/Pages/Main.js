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
            <Link to="/find-number-in-2d-array">find-number-in-2d-array</Link>
          </li>
          <li>
            <Link to="/two-sum">two-sum</Link>
          </li>
          <li>
            <Link to="/majority-element">majority-element</Link>
          </li>
          <li>
            <Link to="/longest-substring-without-repeating-characters">
              longest-substring-without-repeating-characters
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Main
