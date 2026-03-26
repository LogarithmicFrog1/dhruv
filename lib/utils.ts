export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** "Mar 2026" — used on the homepage selected list */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

/** "2026.03.15" — used on the archive page */
export function formatDateArchive(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${year}.${month}.${day}`;
}

/** Extract just the year from a date string */
export function getYear(dateString: string): string {
  return dateString.split("-")[0];
}
