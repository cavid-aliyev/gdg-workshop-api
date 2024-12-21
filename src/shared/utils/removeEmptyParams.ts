export function removeEmptyParams(query: string) {
  return query.replace(/[^=&]+=(?:&|$)/g, "");
}
