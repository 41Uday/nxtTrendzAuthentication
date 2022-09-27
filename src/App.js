import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import LoginForm from './components/LoginForm'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
