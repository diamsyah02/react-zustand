import useAuthStore from './stores/authStore'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const auth = useAuthStore()

  return (
    <>
      {auth.isLoggedIn ?
        <Home />
        :
        <Login />
      }
    </>
  )
}

export default App
