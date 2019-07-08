export function capitalize(string) {
  let lower = String(string).toLowerCase();
  return lower.replace(/(^| )(\w)/g, function(x) {
    return x.toUpperCase();
  });
}