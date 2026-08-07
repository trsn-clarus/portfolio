"use client";

import { useRef, type ReactNode } from "react";
import { AmbientStateContext, useSectionStateObserver } from "./useSectionState";
import { AmbientField } from "./AmbientField";

/**
 * Wraps the page in the single ambient environment. The server and client
 * both start at "intro"; after hydration the observer blends colour tokens
 * continuously between the ordered [data-ambient-section] elements.
 */
export function SectionStateProvider({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const state = useSectionStateObserver(rootRef, "intro");
  return (
    <AmbientStateContext.Provider value={state}>
      <div ref={rootRef} data-ambient-state={state} className="ambient-root">
        <AmbientField />
        {children}
      </div>
    </AmbientStateContext.Provider>
  );
}
