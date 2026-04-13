'use client';
import { SignIn } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-red-700 to-orange-500 rounded-3xl flex items-center justify-center text-4xl mb-6">
              🇪🇹
            </div>
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <p className="text-zinc-400 mt-3">
              Sign in to continue creating cinematic Ethiopian videos
            </p>
          </div>

          <SignIn 
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "bg-zinc-900 border border-zinc-700 shadow-2xl rounded-3xl",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                formButtonPrimary: "ethio-gradient hover:scale-105 transition",
                formFieldInput: "bg-zinc-950 border-zinc-700 text-white rounded-2xl",
                footerActionLink: "text-orange-400 hover:text-orange-300",
                socialButtonsBlockButton: "border-zinc-700 hover:bg-zinc-800",
              },
              variables: {
                colorPrimary: "#f97316",
                colorBackground: "#18181b",
                colorText: "#ffffff",
                colorInputBackground: "#27272a",
                colorInputText: "#ffffff",
                borderRadius: "16px",
              }
            }}
            redirectUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}
