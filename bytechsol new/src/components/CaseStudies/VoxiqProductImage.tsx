import { useEffect, useId, useRef } from "react";
import { Expand, X } from "lucide-react";
import "./VoxiqProductImage.css";

type ProductImageProps = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

export default function VoxiqProductImage({ src, alt, title, width, height }: ProductImageProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const previousOverflow = useRef<string | null>(null);

  const restoreScrolling = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  };

  useEffect(
    () => () => {
      if (previousOverflow.current !== null)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );

  const open = () => {
    if (!dialog.current) return;
    dialog.current.showModal();
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button
        type="button"
        className="vn-product-image"
        aria-label={"Enlarge " + title}
        aria-haspopup="dialog"
        onClick={open}
      >
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
        <span className="vn-product-image-expand" aria-hidden="true">
          <Expand size={18} />
        </span>
      </button>
      <dialog
        className="vn-image-dialog"
        ref={dialog}
        aria-labelledby={titleId}
        onClose={restoreScrolling}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="vn-image-dialog-surface">
          <div className="vn-image-dialog-toolbar">
            <p id={titleId}>{title}</p>
            <button type="button" aria-label="Close image" onClick={() => dialog.current?.close()}>
              <X size={23} aria-hidden="true" />
            </button>
          </div>
          <img src={src} alt={alt} width={width} height={height} />
        </div>
      </dialog>
    </>
  );
}
