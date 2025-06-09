"use client";

import { memo } from "react";
import { Card } from "@heroui/react";

import { ProfilePhoto } from "@/components/profile-photo";
import { HighlightText } from "@/components/textAnimations/highlight-text";
import { SplittingText } from "@/components/textAnimations/splitting-text";
import { ProfileCardProps } from "@/components/about/types";

export const ProfileCard = memo(function ProfileCard({
  image,
  name,
  title,
  description,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-6xl mx-auto p-0 md:p-0 mb-12 rounded-2xl dark:shadow-neutral-700 shadow-md overflow-hidden bg-white/90 dark:bg-black/60">
      <div className="flex flex-col mdplus:flex-row items-stretch md:items-start gap-6 md:gap-8 p-4 sm:p-6">
        <ProfilePhoto
          alt={`${name} — profile photo`}
          footer={
            <div className="flex flex-col text-white">
              <HighlightText className="text-lg font-semibold" text={name} />
              <p className="text-xs sm:text-sm text-white/85 mt-1 leading-snug">
                {title}
              </p>
            </div>
          }
          src={image}
        />

        <div className="text-muted-foreground text-sm leading-relaxed max-w-2xl px-1 sm:px-2 md:px-4 py-2 md:py-4 min-w-0 flex-1">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              <SplittingText
                delay={index * 500}
                inView={true}
                inViewOnce={true}
                motionVariants={{ stagger: 0.08 }}
                text={paragraph}
                type="words"
              />
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
});
