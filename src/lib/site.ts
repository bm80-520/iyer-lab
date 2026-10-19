// Next's Link handles basePath; raw HTML URLs and public assets need it explicitly.
export function withBasePath(url: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`;
}
