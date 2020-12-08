import { Route, Redirect } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import './App.css';
import { Home } from './Home'

export const App = () => {
  return (
<>

  <Route render={ () => {
    // The user id is saved under the key app_user_id in local Storage. Change below if needed!
      if (localStorage.getItem("app_user_id")) {
          return (
              <>
                  {/* //Components that are rendered when the user is authenticated go inside this React fragment */}
                  <Home />
              </>
          )
      } else {
          return <Redirect to="/login" />
      }
  } } />

  <Route path="/login" render={props => <Login {...props} />} />
  <Route path="/register" render={props => <Register {...props} />} />
</>
  ) }

export default App;

