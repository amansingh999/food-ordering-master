export function dbTimeForHuman(str) {
  const date = new Date(str);
  date.setMinutes(date.getMinutes() + 330); // Add 5 hours 30 minutes

  return date.toISOString().replace('T', ' ').substring(0, 16);
}