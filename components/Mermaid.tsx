"use client";
import React, { useEffect } from "react";
import mermaid from "mermaid";

export const MermaidChart = () => {
  mermaid.initialize({ startOnLoad: true });
  const chart = 'flowchart TD; text["fas:fa-user user"] ---> test2;';

  useEffect(() => {
    mermaid.run({ suppressErrors: true });
    mermaid.contentLoaded();
  }, []);

  return <pre className="mermaid">{chart}</pre>;
};
