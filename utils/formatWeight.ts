export function formatWeight(weight: number | string): string {
  const formatedWeight = String(Number(weight).toFixed(2));

  return `${formatedWeight} kg`;
}
