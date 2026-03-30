'use client';

interface VideoPlayerProps {
  src: string;
  title?: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
      {title && <div className="p-4 border-b border-zinc-800 font-medium">{title}</div>}
      <video 
        src={src} 
        controls 
        className="w-full aspect-video bg-black"
        poster="/poster.png"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
