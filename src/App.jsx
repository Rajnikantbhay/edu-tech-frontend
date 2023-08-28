//Login.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AuthProvider from "./AuthProvider"

function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
              <Route index path='/' element={<Home />}/>
              <Route path='/user-register' element={<Signup />} />
              <Route path='/user-login' element={<Login />} />
          </Route>
      </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
