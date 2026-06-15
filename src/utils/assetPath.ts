export function getAssetPath(src: string): string {
  // Check if it is an external URL
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  const basePath = process.env.GITHUB_ACTIONS ? "/centripetal-es-website" : "";
  return `${basePath}${src}`;
}
