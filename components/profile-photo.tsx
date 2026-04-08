"use client";

import Image from "next/image";
import { memo, type ReactNode } from "react";

type ProfilePhotoProps = {
  alt: string;
  src: string;
  footer: ReactNode;
  className?: string;
};

export const ProfilePhoto = memo(function ProfilePhoto({
  alt,
  src,
  footer,
  className = "",
}: ProfilePhotoProps) {
  return (
    <div
      className={`
        relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-content2
        w-full max-w-[280px] mx-auto
        aspect-[3/4]
        md:mx-0 md:w-[280px] md:max-w-none
        ${className}
      `}
    >
      <Image
        alt={alt}
        className="object-cover object-[center_8%]"
        fill
        sizes="(max-width: 768px) min(280px, 92vw), 280px"
        src={src}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/20 bg-black/55 backdrop-blur-md px-4 py-3">
        {footer}
      </div>
    </div>
  );
});
