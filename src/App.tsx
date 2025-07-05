import {BrowserRouter,  Routes, Route, useNavigate} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import {SignUp} from './pages/Signup'
import {SignIn} from './pages/Signin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
