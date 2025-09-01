// import './App.css'
// import {Route, Switch, Redirect} from 'react-router-dom'
// import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import ProtectedRoute from './ProtectedRoute'
// import JobItemDetails from './JobItemDetails'
// import NotFound from './NotFound'

// // Replace your code here
// const App = () => (
//   <Switch>
//     <Route exact path="/login" component={LoginForm} />
//     <ProtectedRoute exact path="/" component={Home} />
//     <ProtectedRoute exact path="/jobs" component={Jobs} />
//     <ProtectedRoute exact path="jobs/:id" component={JobItemDetails} />
//     <Route exact path="/not-found" component={NotFound} />
//     <Redirect to="/not-found" />
//   </Switch>
// )
// export default App
import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
