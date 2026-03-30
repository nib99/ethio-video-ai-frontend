'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (sessionId) {
      // Optional: Call backend to verify payment and sync credits
      fetch(`\( {process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify-payment?session_id= \){sessionId}`)
        .then(() => setStatus('success'))
        .catch(() => setStatus('error'));
    }
  }, [sessionId]);

  if (status === 'loading') {
    return <div className="min-h-screen flex items-center justify-center">Processing your payment...</div>;
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-zinc-400 mb-10">Your credits have been added. Thank you for supporting EthioVideo AI.</p>
        
        <Link href="/dashboard">
          <button className="ethio-gradient w-full py-6 rounded-2xl text-lg font-semibold">
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
