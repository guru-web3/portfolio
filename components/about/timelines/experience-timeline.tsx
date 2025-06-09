"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/about/section-header";
import { containerVariants, itemVariants } from "@/components/about/variants";
import { ExperienceItems } from "@/components/about/types";

interface ExperienceTimelineProps {
  experience: ExperienceItems;
}

export const ExperienceTimeline = ({ experience }: ExperienceTimelineProps) => (
  <div className="mb-24">
    <SectionHeader icon="mdi:briefcase-outline" title="Experience" />

    <motion.ol
      className="relative ml-6"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      whileInView="visible"
    >
      <div className="absolute top-2 left-2 bottom-0 w-px bg-primary-500" />
      {experience.map((item, idx) => (
        <motion.li
          key={idx}
          className="mb-10 relative pl-6"
          variants={itemVariants}
        >
          <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <time className="block mb-2 text-sm text-primary-500">
            {item.date}
          </time>
          <ul className="space-y-1.5">
            {item.description.map((point, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary-500 mt-1 shrink-0">&#8226;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ol>
  </div>
);
