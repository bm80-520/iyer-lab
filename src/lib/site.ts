// Next's Link handles basePath; Markdown links and image URLs use this helper.
export function withBasePath(url: string) {
  return url.startsWith('/') && !url.startsWith('//')
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`
    : url;
}
