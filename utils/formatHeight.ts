export function formatHeight(height: number | string): string {
  const formatedHeight = String(Number(height).toFixed(2));

  return `${formatedHeight} m`;
}
