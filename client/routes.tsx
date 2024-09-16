import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ProtectedComponent from './components/ProtectedComponent'
import App from './components/App'
import LandingPage from './pages/LandingPage'
import SignUpForm from './pages/SignUpForm'
import Dashboard from './pages/Dashboard/Dashboard'
import DumbDashboard from './components/DumbDashboard'
import ProfilePage from './pages/UserProfilePage/UserProfilePage'
import ErrorPage from './pages/ErrorPage'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<LandingPage />} />
    {/* TODO: Update with real dashboard component and path */}
    <Route path="/chores/:id" element={<DumbDashboard />} />
    <Route
      path="signup"
      element={<ProtectedComponent component={SignUpForm} />}
      handle={'Sign Up'}
    />
    <Route
      path="/profile/:id"
      // element={<ProtectedComponent component={ProfilePage} />} // TODO: add auth0
      element={<ProfilePage />}
      handle={'Profile Page'}
    />
    <Route
      path="dashboard" // TODO: add '/:flatId' to path
      // element={<ProtectedComponent component={Dashboard} />} // TODO: add auth0
      element={<Dashboard />}
      handle={'Flat Dashboard'}
    />
    {/* DumbDashboard for testing */}
    {/* <Route path="/chores/:flatId" element={<DumbDashboard />} /> */}
  </Route>,
)

export const router = createBrowserRouter(routes)
