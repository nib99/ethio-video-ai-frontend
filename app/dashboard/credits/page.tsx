'use client';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function CreditsPage() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const buyCredits = async (plan: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      alert("Please sign in to purchase credits");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.primaryEmailAddress.emailAddress,
          plan: plan
        }),
      });

      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Failed to start checkout");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Buy Credits</h1>
      
      <div className="space-y-6">
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold">20 Credits</div>
              <div className="text-zinc-400">$19 • Good for 10 premium videos</div>
            </div>
            <Button 
              onClick={() => buyCredits("20")} 
              disabled={loading}
              className="ethio-gradient px-10"
            >
              {loading ? "Processing..." : "Buy Now"}
            </Button>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-700">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-3xl font-bold">50 Credits</div>
              <div className="text-zinc-400">$39 • Best Value</div>
            </div>
            <Button 
              onClick={() => buyCredits("50")} 
              disabled={loading}
              className="ethio-gradient px-10"
            >
              {loading ? "Processing..." : "Buy Now"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
