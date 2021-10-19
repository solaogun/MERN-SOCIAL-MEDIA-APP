import Home from './pages/home/home'
import { Person } from '@material-ui/icons';
import Profile from './pages/profile/profile';
import Register from './pages/register/register'
import Login from './pages/login/login'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <  Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
    // <Home />
    // <Profile />
    // <Register />
    // <Login />
  );
}

export default App;
