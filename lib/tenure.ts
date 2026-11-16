export function getTenure(start: string, today: Date) {
  const joined = new Date(`${start}T00:00:00Z`);
  let months =
    (today.getUTCFullYear() - joined.getUTCFullYear()) * 12 +
    today.getUTCMonth() -
    joined.getUTCMonth();
  if (today.getUTCDate() < joined.getUTCDate()) months -= 1;
  months = Math.max(0, months);
  return { years: Math.floor(months / 12), months };
}
