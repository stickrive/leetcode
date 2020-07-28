import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from '../Pages/Main'
import FindRepeatNumber from '../Pages/Array/FindRepeatNumber'

const App = () => {
  return (
    <Router>
      <Main></Main>
      <Switch>
        <Route path="/find-repeat-number">
          <FindRepeatNumber />
        </Route>
        <Route path="/users">
          <Users />
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

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}
