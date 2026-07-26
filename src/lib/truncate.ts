export function truncateAtWord(text: string, max: number): string {
  if (text.length <= max) return text;

  const slice = text.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;

  return `${cut.replace(/[\s,:;.]+$/, "")}…`;
}
