type Props = {
  title: string;
  items: string[];
  mono?: boolean;
  muted?: boolean;
};

/** A labelled bullet group inside a project chapter — Action / Constraints / Evidence. */
export function EvidenceList({ title, items, mono, muted }: Props) {
  if (items.length === 0) return null;
  return (
    <div className={muted ? "ev-block ev-muted" : "ev-block"}>
      <span className="ev-label">{title}</span>
      <ul className={mono ? "ev-list ev-mono" : "ev-list"}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
