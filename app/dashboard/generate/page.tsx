'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';           // ← Fixed: lowercase 'button'
import VideoPlayer from '@/components/VideoPlayer';

const schema = z.object({
  text: z.string().min(15, "Please write at least 15 characters"),
  language: z.enum(["Amharic", "Afaan Oromo", "Somali", "Tigrinya"]),
  tier: z.enum(["free", "pro", "premium"]),
});

type FormData = z.infer<typeof schema>;

export default function GeneratePage() {
  const [jobId, setJobId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "completed" | "failed">("idle");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { language: "Amharic", tier: "premium" }
  });

  const onSubmit = async (data: FormData) => {
    setStatus("processing");
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/generate-cinematic-video`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      
      if (!res.ok) throw new Error(result.detail || "Generation failed");

      setJobId(result.job_id);

      // Poll for completion status
      const interval = setInterval(async () => {
        try {
          const statusRes = await fetch(
            `\( {process.env.NEXT_PUBLIC_BACKEND_URL}/api/status/ \){result.job_id}`
          );
          const statusData = await statusRes.json();

          if (statusData.status === "completed") {
            setStatus("completed");
            setVideoUrl(statusData.video_url);
            clearInterval(interval);
          } else if (statusData.status === "failed") {
            setStatus("failed");
            setError("Video generation failed. Please try again.");
            clearInterval(interval);
          }
        } catch (pollError) {
          console.error("Polling error:", pollError);
        }
      }, 4000);
    } catch (err: any) {
      setStatus("failed");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-8 md:p-10 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Generate Cinematic Video</h1>
            <p className="text-zinc-400 mb-10">
              Write your script and choose language. AI will handle the rest.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <label className="block text-sm mb-3 font-medium">Your Script / Story</label>
                <textarea
                  {...register("text")}
                  rows={10}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-6 text-lg focus:outline-none focus:border-orange-500 resize-y"
                  placeholder="በኢትዮጵያ ተራሮች ላይ የተካሄደው ታሪካዊ ጉዞ..."
                />
                {errors.text && (
                  <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-3">Language</label>
                  <select 
                    {...register("language")} 
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4 focus:outline-none focus:border-orange-500"
                  >
                    <option value="Amharic">Amharic (አማርኛ)</option>
                    <option value="Afaan Oromo">Afaan Oromo</option>
                    <option value="Somali">Somali</option>
                    <option value="Tigrinya">Tigrinya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-3">Quality Tier</label>
                  <select 
                    {...register("tier")} 
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl p-4 focus:outline-none focus:border-orange-500"
                  >
                    <option value="premium">Premium – Best Quality (AI Images + Native Voice)</option>
                    <option value="pro">Pro – Balanced Speed & Quality</option>
                    <option value="free">Free – Stock Images Only</option>
                  </select>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={status === "processing"}
                className="w-full py-8 text-xl ethio-gradient disabled:opacity-70"
              >
                {status === "processing" 
                  ? "🎬 Generating... This may take 1-3 minutes" 
                  : "Generate Video Now"}
              </Button>
            </form>

            {status === "completed" && videoUrl && (
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">✅ Your Video is Ready!</h3>
                <VideoPlayer src={`\( {process.env.NEXT_PUBLIC_BACKEND_URL} \){videoUrl}`} />
                
                <div className="flex gap-4 mt-6">
                  <a 
                    href={`\( {process.env.NEXT_PUBLIC_BACKEND_URL} \){videoUrl}`} 
                    download 
                    className="flex-1"
                  >
                    <Button className="w-full py-6 bg-green-600 hover:bg-green-700">
                      ⬇️ Download Video
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {error && <p className="text-red-500 mt-8 text-center text-lg">{error}</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
