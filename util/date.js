export function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error('Pass only dates!');
  }
  return date.toLocaleDateString();
}
