"use client";

import type { ReactNode } from "react";
import { AmbientStateContext, useSectionStateObserver } from "./useSectionState";
import { AmbientField } from "./AmbientField";

/**
 * Wraps the page in the single ambient environment. The state this renders
 * with on the server ("intro") is exactly the initial client state, so there
 * is nothing to reconcile on hydration — the field only starts moving once a
 * visitor scrolls past the first [data-ambient-section].
 */
export function SectionStateProvider({ children }: { children: ReactNode }) {
  const state = useSectionStateObserver("intro");
  return (
    <AmbientStateContext.Provider value={state}>
      <div data-ambient-state={state} className="ambient-root">
        <AmbientField />
        {children}
      </div>
    </AmbientStateContext.Provider>
  );
}
