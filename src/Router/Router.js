import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from '../Pages/Main'

import FindRepeatNumber from '../Pages/Array/FindRepeatNumber'
import FindNumberIn2DArray from '../Pages/Array/FindNumberIn2DArray'
import TwoSum from '../Pages/Array/TwoSum'

import LengthOfLongestSubstring from '../Pages/String/LengthOfLongestSubstring'

const App = () => {
  return (
    <Router>
      <Main></Main>
      <Switch>
        <Route path="/find-repeat-number">
          <FindRepeatNumber />
        </Route>
        <Route path="/find-number-in-2d-array">
          <FindNumberIn2DArray />
        </Route>
        <Route path="/two-sum">
          <TwoSum />
        </Route>

        <Route path="/longest-substring-without-repeating-characters">
          <LengthOfLongestSubstring />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
export default App

function Home() {
  return <h2>Home</h2>
}
