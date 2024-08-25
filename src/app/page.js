'use client';

import LandingPage from "@/components/LandingPage";
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

export default function Home() {
  const { user } = useAuth();

  return (
    <>
      <LandingPage />
      {user && (
        <div className="fixed bottom-4 right-4">
          <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Dashboard
          </Link>
        </div>
      )}
    </>
  );
}
