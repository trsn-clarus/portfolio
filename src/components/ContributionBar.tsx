export function ContributionBar({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="contrib">
      <div className="row">
        <span>{label}</span>
        <b>~{percent}%</b>
      </div>
      <div className="track">
        <div className="fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
