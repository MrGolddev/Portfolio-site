'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ensure audio stops if component unmounts
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => console.error("Audio play failed:", error)); // Catch potential play errors
    }
    setIsPlaying(!isPlaying);
  };

  // Update state if audio finishes playing naturally
  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src="/audio/im_god.mp3" onEnded={handleEnded} preload="metadata" />
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlayPause}
        className={cn(
          "border-accent-green text-accent-green hover:bg-accent-green/10 hover:text-accent-green",
          "h-10 w-10 rounded-full"
        )}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <span className="text-sm text-muted-foreground">Clams Casino - I&apos;m God</span>
    </div>
  );
}

