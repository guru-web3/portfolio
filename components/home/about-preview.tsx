"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Button, Card, Avatar, AvatarGroup, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

import { ProfilePhoto } from "@/components/profile-photo";
import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const AboutPreviewSection = memo(function AboutPreviewSection() {
  const { name, title, image, description } = DATA.about.profile;
  const experience = DATA.about.experience;
  const technologies = DATA.about.technologies;

  return (
    <section className="py-20 bg-background" id="about-section">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-3xl md:text-4xl font-bold mb-4"
            text="About Me"
          />
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="w-full p-0 rounded-2xl dark:shadow-neutral-700 shadow-md overflow-hidden bg-white/90 dark:bg-black/60">
            <div className="flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-8 p-4 sm:p-6">
              <ProfilePhoto
                alt={`${name} — profile photo`}
                footer={
                  <div className="flex flex-col text-white">
                    <p className="text-lg font-semibold leading-tight">{name}</p>
                    <p className="text-xs sm:text-sm text-white/85 mt-1 leading-snug">
                      {title}
                    </p>
                  </div>
                }
                src={image}
              />

              <div className="flex flex-col justify-center px-1 sm:px-2 md:px-0 py-2 md:py-6 gap-3 min-w-0 flex-1">
                {description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground-600 text-sm leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-primary-100">
              <Icon
                className="w-5 h-5 text-primary-500"
                icon="mdi:briefcase-outline"
              />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

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
                className="mb-8 relative pl-6"
                variants={itemVariants}
              >
                <span className="absolute left-0 top-1 bg-primary-500 rounded-full w-4 h-4 border-2 border-background z-10" />
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <time className="block mb-2 text-sm text-primary-500">
                  {item.date}
                </time>
                <ul className="space-y-1">
                  {item.description.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground-500 flex items-start gap-2"
                    >
                      <span className="text-primary-500 mt-0.5 shrink-0">
                        &#8226;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-full bg-primary-100">
              <Icon
                className="w-5 h-5 text-primary-500"
                icon="lucide:wrench"
              />
            </div>
            <h3 className="text-2xl font-bold">Technologies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(technologies).map(([key, category]) => (
              <Card
                key={key}
                className="border-none shadow-md bg-white/90 dark:bg-black/60"
              >
                <div className="p-5">
                  <h4 className="text-base font-semibold mb-1 capitalize">
                    {key === "aiTooling"
                      ? "AI & Agent Tooling"
                      : key === "web3"
                        ? "Web3 & Blockchain"
                        : key}
                  </h4>
                  <p className="text-xs text-foreground-500 mb-4">
                    {category.description}
                  </p>
                  <AvatarGroup max={8}>
                    {category.tools.map(({ name: toolName, icon }) => (
                      <Tooltip
                        key={toolName}
                        content={toolName}
                        showArrow={true}
                      >
                        <Avatar
                          showFallback
                          classNames={{
                            base: "bg-transparent",
                            icon: "text-foreground dark:text-foreground-dark",
                          }}
                          icon={<Icon icon={icon} width={22} />}
                        />
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/about">
            <Button
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
              size="lg"
              variant="bordered"
            >
              Full About Page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
});
