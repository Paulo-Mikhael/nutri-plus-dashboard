export function CardTitle({ h2, h3 }: { h2: string; h3: string }) {
  return (
    <span className="flex gap-3 items-start">
      <h2 className="text-xl font-bold text-nowrap">{h2}</h2>
      <h3 className="text-sm text-wrap">{h3}</h3>
    </span>
  );
}
