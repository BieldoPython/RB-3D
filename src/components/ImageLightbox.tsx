import { useCallback, useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const reset = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    reset();
  }, [src, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const toggleZoom = () => {
    if (zoom > 1) reset();
    else setZoom(2.5);
  };

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(4, Math.max(1, z + (e.deltaY < 0 ? 0.25 : -0.25))));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (zoom <= 1) return;
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || zoom <= 1) return;
    setPan((p) => ({
      x: p.x + e.clientX - last.current.x,
      y: p.y + e.clientY - last.current.y,
    }));
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col bg-foreground/95"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <div
        className="flex shrink-0 items-center justify-between px-4 py-3 text-background"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="truncate text-sm font-medium opacity-80">{alt}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
            aria-label="Reduzir zoom"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <ZoomOut className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(4, z + 0.5))}
            aria-label="Aumentar zoom"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <ZoomIn className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-background/15 transition-colors hover:bg-background/25"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden p-4"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
      >
        <img
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          draggable={false}
          onClick={toggleZoom}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className={`max-h-full max-w-full select-none object-contain transition-transform duration-200 ${
            zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
          }`}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          }}
        />
      </div>

      <p className="shrink-0 pb-4 text-center text-xs text-background/60">
        Clique para ampliar · role para zoom · arraste quando ampliado
      </p>
    </div>
  );
}
