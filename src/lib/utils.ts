export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function clamp(
  value: number,
  min: number | null = null,
  max: number | null = null
) {
  if (min != null) value = Math.max(value, min);

  if (max != null) value = Math.min(value, max);

  return value;
}
