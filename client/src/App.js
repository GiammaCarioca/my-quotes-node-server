import { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import './App.css'

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Navbar from './components/Navbar'

function App() {
  const { authIsReady, user } = useAuthContext()
  const [isAdmin, setIsAdmin] = useState(null)

  if (user) {
    user
      .getIdTokenResult()
      .then((idTokenResult) => setIsAdmin(idTokenResult.claims.admin))
  }

  return (
    <div className='App'>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/'>
                {!user && <Redirect to='/login' />}
                {user && <Home />}
              </Route>
              <Route path='/login'>
                {user && <Redirect to='/' />}
                {!user && <Login />}
              </Route>
              <Route path='/signup'>
                {user && user.displayName && <Redirect to='/' />}
                {!user && <Signup />}
              </Route>
              <Route path='/create'>
                {!isAdmin && <Redirect to='/' />}
                {isAdmin && <Create />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
