"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar,
  AvatarGroup,
  Tooltip,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import ImageGallery from "@/components/image-gallery";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { ProjectModalProps } from "@/components/projects/types";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/,
  );

  return match ? match[1] : null;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  if (!project) return null;

  const videoId = project.video ? getYouTubeId(project.video) : null;

  return (
    <Modal
      backdrop="blur"
      className="border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 shadow-md dark:shadow-cyan-900/40 rounded-xl overflow-hidden transition-colors"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="2xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="text-xl font-bold text-primary-700 border-b border-white/20">
          {project.title}
        </ModalHeader>
        <ScrollShadow hideScrollBar size={60}>
          <ModalBody>
            {videoId ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
                <iframe
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                  title={`${project.title} Demo`}
                />
              </div>
            ) : (
              project.gallery &&
              project.gallery.length > 0 && (
                <ImageGallery images={project.gallery} />
              )
            )}

            <p className="text-sm text-primary-500 mb-3 font-medium uppercase tracking-wide">
              {project.category}
            </p>

            <div className="text-foreground-600 leading-relaxed mb-6 whitespace-pre-line">
              {project.details}
            </div>

            {project.architecture && (
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">
                  Architecture
                </h4>
                <MermaidDiagram chart={project.architecture} />
              </div>
            )}

            {project.tech && (
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-foreground">
                  Technologies Used
                </h4>
                <AvatarGroup>
                  {project.tech.map(({ name, icon }) => (
                    <Tooltip key={name} content={name} showArrow={true}>
                      <Avatar
                        showFallback
                        classNames={{
                          base: "bg-transparent",
                          icon: "text-foreground dark:text-foreground-dark",
                        }}
                        icon={<Icon icon={icon} width={25} />}
                      />
                    </Tooltip>
                  ))}
                </AvatarGroup>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    color="default"
                    startContent={<Icon icon="mdi:github" width={20} />}
                    variant="bordered"
                  >
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.video && (
                <a
                  href={project.video}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    color="danger"
                    startContent={<Icon icon="mdi:youtube" width={20} />}
                    variant="bordered"
                  >
                    Watch on YouTube
                  </Button>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button
                    color="primary"
                    startContent={<Icon icon="mdi:web" width={20} />}
                    variant="bordered"
                  >
                    Live Demo
                  </Button>
                </a>
              )}
            </div>
          </ModalBody>
        </ScrollShadow>

        <ModalFooter className="flex flex-wrap gap-3 justify-end border-t border-white/20">
          <Button
            className="text-foreground-500"
            color="danger"
            variant="light"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
