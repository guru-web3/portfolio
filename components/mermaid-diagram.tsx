"use client";

import { memo, useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export const MermaidDiagram = memo(function MermaidDiagram({
  chart,
  className = "",
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          primaryColor: "#22d3ee",
          primaryTextColor: "#f0f0f0",
          primaryBorderColor: "#0891b2",
          lineColor: "#6b7280",
          secondaryColor: "#1e293b",
          tertiaryColor: "#0f172a",
          fontFamily: "inherit",
          fontSize: "13px",
        },
      });

      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;

      try {
        const { svg: rendered } = await mermaid.render(id, chart);

        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setSvg("");
      }
    }

    render();

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (!svg) return null;

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-x-auto rounded-lg bg-black/30 p-4 ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
});
