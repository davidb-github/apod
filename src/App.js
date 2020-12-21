import { Route, Redirect } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { NavBar } from './components/nav/NavBar';
import { ApplicationViews } from './components/ApplicationView';
import './css/app.css';

export const App = () => {
  return (
    <>
      <Route render={() => {
        if (localStorage.getItem("app_user_id")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
    </>
  )
}

export default App;

