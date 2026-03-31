'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/Button';

export default function CreditsPage() {
  const [loading, setLoading] = useState(false);

  const buyCredits = async (amount: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "user@example.com", plan: "pay_per_video" }), // Replace with real user email from auth
      });
      
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      }
    } catch (error) {
      alert("Payment initiation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-10 overflow-auto">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Buy Credits</h1>
            <p className="text-zinc-400 mb-10">More credits = more videos. Pay once, use anytime.</p>

            <div className="grid gap-6">
              <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">20 Credits</div>
                  <div className="text-sm text-zinc-400">≈ 10 premium videos</div>
                </div>
                <Button 
                  onClick={() => buyCredits(20)}
                  disabled={loading}
                  className="ethio-gradient px-10 py-6 text-lg"
                >
                  {loading ? "Redirecting to Stripe..." : "Buy for $19"}
                </Button>
              </div>

              <div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-8 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">50 Credits</div>
                  <div className="text-sm text-zinc-400">Best value • ≈ 25 videos</div>
                </div>
                <Button 
                  onClick={() => buyCredits(50)}
                  disabled={loading}
                  className="ethio-gradient px-10 py-6 text-lg"
                >
                  {loading ? "Redirecting..." : "Buy for $39"}
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-zinc-500 mt-12">
              Secure checkout powered by Stripe • Instant credit delivery
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
```
