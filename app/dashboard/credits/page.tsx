'use client';

import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import { Sparkles, Star, Zap } from 'lucide-react';

export default function CreditsPage() {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState<string | null>(null);

  const buyCredits = async (plan: string) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      alert("Please sign in to purchase credits");
      return;
    }

    setLoading(plan);
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/create-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.primaryEmailAddress.emailAddress,
          plan: plan,
        }),
      });

      const data = await res.json();

      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert("Failed to create checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(null);
    }
  };

  const plans = [
    {
      credits: 20,
      price: 19,
      description: "Good for beginners",
      value: "10 premium videos",
      popular: false,
      icon: Zap,
    },
    {
      credits: 50,
      price: 39,
      description: "Best Value",
      value: "25 premium videos",
      popular: true,
      icon: Star,
    },
  ];

  if (!isLoaded) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
          <Sparkles size={18} />
          Credit Store
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-3">Buy Credits</h1>
        <p className="text-zinc-400 text-lg">
          Power your creativity with EthioVideo AI
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {plans.map((plan) => {
          const isLoading = loading === plan.credits.toString();
          const Icon = plan.icon;

          return (
            <div
              key={plan.credits}
              className={`relative bg-zinc-900 rounded-3xl p-8 border transition-all duration-300 hover:border-orange-500/50 group ${
                plan.popular 
                  ? 'border-orange-500 shadow-xl shadow-orange-500/10 scale-[1.02]' 
                  : 'border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-6 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star size={14} /> Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="text-orange-400" size={32} />
                    <div className="text-5xl font-bold text-white">{plan.credits}</div>
                  </div>
                  <div className="text-2xl text-zinc-400 mt-1">Credits</div>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-bold text-white">${plan.price}</div>
                  <div className="text-sm text-zinc-500">USD</div>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="text-zinc-300 font-medium">{plan.description}</div>
                <div className="text-zinc-400 text-sm">
                  ≈ {plan.value}
                </div>
              </div>

              <Button
                onClick={() => buyCredits(plan.credits.toString())}
                disabled={!!loading}
                isLoading={isLoading}
                variant="primary"
                size="lg"
                className="w-full text-base font-semibold py-6 ethio-gradient"
              >
                {isLoading ? "Redirecting to Checkout..." : "Purchase Now"}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center text-xs text-zinc-500">
        Secure checkout powered by Stripe • Instant credit delivery after payment
      </div>
    </div>
  );
}
