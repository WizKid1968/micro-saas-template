import LandingPage from "@/components/LandingPage";
import { useAuth } from '../contexts/AuthContext'
import Login from '../components/Login'
import Dashboard from '../components/Dashboard'

export default function Home() {
  const { user } = useAuth()

  return (
    <>
      {user ? <Dashboard /> : (
        <>
          <LandingPage />
          <Login />
        </>
      )}
    </>
  );
}
