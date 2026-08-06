import localFont from "next/font/local";

/**
 * Self-hosted, same division of labour as SOOM: Pretendard for everything a
 * person reads, Instrument Sans for the handful of English display lines,
 * Plex Mono for years/metrics/indices alone. All three OFL, licences sit
 * beside the files. next/font/local handles preload, font-display and
 * basePath-correct URLs at build time — no hand-written @font-face needed.
 *
 * The Pretendard file is subset to exactly this site's own glyph set (see
 * tools/build-fonts.py) — SOOM's subset only covers SOOM's copy, not this
 * one. Re-run that script after any Korean copy change.
 */
export const pretendard = localFont({
  src: "./pretendard/PretendardVariable.portfolio.woff2",
  variable: "--font-pretendard",
  weight: "400 600",
  display: "swap",
  fallback: ["Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", "Arial"],
});

export const instrument = localFont({
  src: "./instrument/InstrumentSans-Latin-wght.woff2",
  variable: "--font-instrument",
  weight: "400 700",
  display: "swap",
  fallback: ["Segoe UI", "Helvetica Neue", "Arial"],
});

export const plexMono = localFont({
  src: [
    { path: "./plex-mono/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./plex-mono/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
});

export const fontVariables = `${pretendard.variable} ${instrument.variable} ${plexMono.variable}`;
