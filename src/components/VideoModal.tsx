import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  title: string;
}

/** Native <dialog> with the demo video. Esc, the close button or a click outside closes it. */
export default function VideoModal({ open, onClose, src, poster, title }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      videoRef.current?.play().catch(() => {
        // Autoplay can be blocked; the controls are there to start it.
      });
    } else if (!open && dialog.open) {
      dialog.close();
    }
    if (!open) videoRef.current?.pause();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
      aria-label={`${title} demo video`}
      className="m-auto w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-navy-950/85 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-2xl">
        <video ref={videoRef} src={src} poster={poster} controls playsInline preload="none" className="block aspect-video w-full" />
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-navy-900 text-ivory transition hover:border-gold-300 hover:text-gold-200"
      >
        <X className="h-5 w-5" />
      </button>
    </dialog>
  );
}
