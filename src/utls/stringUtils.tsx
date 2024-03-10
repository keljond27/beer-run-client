export const stringToTitleCase = (string: string) => {
  const regex = /\b[a-z]\w+/g;
  return string.replace(regex, function(match) {
    return match.charAt(0).toUpperCase() + match.slice(1);
  });
}