/** Public asset path helper — works with Next basePath `/safety-course`. */
export function media(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Files live under public/media → served as /safety-course/media/...
  if (clean.startsWith("/media/")) return `/safety-course${clean}`;
  if (clean.startsWith("/safety-course/")) return clean;
  return `/safety-course/media${clean.startsWith("/") ? clean : `/${clean}`}`;
}
