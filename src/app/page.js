import LandingPage from "@/components/LandingPage";
import dynamic from 'next/dynamic';

const DynamicDashboard = dynamic(() => import('../components/Dashboard'), { ssr: false });

export default function Home() {
  return (
    <>
      <LandingPage />
      <DynamicDashboard />
    </>
  );
}
