import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { RequireAuth } from './authentication/RequiredAuth'
import LandingPage from "./pages/LandingPage";
const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem('authorization');
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LandingPage /> */}
      <BrowserRouter>
        <Routes >
          <Route path="/" element={
            token ? <Navigate to="/dashboard" replace /> : <LandingPage />
          } />

          {/* Sign In / Sign Up: Redirect to dashboard if already signed in */}
          <Route path="/signin" element={
            token ? <Navigate to="/dashboard" replace /> : <SignIn />
          } />
          {/* <Route path="/signup" element={
            token ? <Navigate to="/dashboard" replace /> : <SignUp />
          } /> */}
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={
            <RequireAuth >
              <Dashboard />
            </RequireAuth>
          }>
          </Route>
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App
