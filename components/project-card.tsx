"use client";

import { memo } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectCardProps } from "@/components/projects/types";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card
      isFooterBlurred
      isHoverable
      isPressable
      className="
        border-none bg-white/90 dark:bg-black/70
        shadow-md dark:shadow-cyan-900/40
        rounded-xl overflow-hidden h-full w-full
        transition-colors cursor-pointer
      "
      radius="lg"
      onPress={onViewDetails}
    >
      <CardBody className="p-0 flex flex-col h-full">
        <div className="relative w-full aspect-[16/10] overflow-hidden group">
          <Image
            isZoomed
            removeWrapper
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            classNames={{
              img: "w-full h-full object-cover",
              zoomedWrapper: "w-full h-full",
            }}
            loading="lazy"
            src={project.image}
          />
          {project.video && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white ml-1" icon="mdi:play" />
              </div>
            </div>
          )}
          <CardFooter
            className="
              justify-center
              bg-black/40
              border-white/20 border-1
              overflow-hidden py-2.5 absolute before:rounded-xl rounded-large
              bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10
              backdrop-blur-sm
            "
          >
            <p className="text-xs font-medium text-white tracking-wider uppercase z-10">
              {project.category}
            </p>
          </CardFooter>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                rel="noopener noreferrer"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  className="text-foreground-600"
                  size="sm"
                  startContent={<Icon icon="mdi:github" />}
                  variant="flat"
                >
                  GitHub
                </Button>
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                rel="noopener noreferrer"
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  className="text-foreground-600"
                  size="sm"
                  startContent={<Icon className="text-red-500" icon="mdi:youtube" />}
                  variant="flat"
                >
                  Demo
                </Button>
              </a>
            )}
            <Button
              className="ml-auto border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
              color="primary"
              endContent={<Icon icon="lucide:arrow-right" />}
              size="sm"
              variant="bordered"
            >
              Details
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
});
