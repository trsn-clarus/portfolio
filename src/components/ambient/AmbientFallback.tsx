/**
 * Pure-CSS environment layer. Always in the server-rendered markup, so a
 * visitor with JavaScript disabled or a browser that fails canvas still gets
 * the field's colour and depth — just without the drift. AmbientField mounts
 * the canvas on top of this; if that never happens, this is the whole page
 * background.
 */
export function AmbientFallback() {
  return <div className="ambient-fallback" />;
}
