import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import BasicLayout from './layouts/BasicLayout'
import CoursePage from './pages/Course'
import DashboardPage from './pages/Dashboard'
import MonitorPage from './pages/Dashboard/Monitor'
import LoginPage from './pages/Login'
import { isAuthenticated } from './utils/auth'

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <LoginPage />}
      />
      <Route
        element={
          <ProtectedRoute>
            <BasicLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dashboard/monitor" element={<MonitorPage />} />
        <Route path="courses" element={<CoursePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
