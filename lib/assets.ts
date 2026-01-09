export function asset(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}
