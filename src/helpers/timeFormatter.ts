export function timeFormatter(trackTimeMillis: number | undefined): string {
  if (!trackTimeMillis) {
    return "";
  }
  return new Date(trackTimeMillis).toISOString().slice(11, 16);
}
