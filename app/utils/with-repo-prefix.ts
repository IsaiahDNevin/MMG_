export function withRepoPrefix(src: string): string {
  if (typeof window !== "undefined") {
    const host = window.location.host;
    // Check for GitHub Pages pattern: userid.github.io/repo-name.com
    // and extract repo name (between first / and .com)
    const match = host.match(/^[^.]+\.github\.io\/([^/]+)/);
    let repo = "";
    if (match && match[1]) {
      repo = match[1];
    } else {
      // fallback: try to get repo from pathname if deployed as /repo-name/
      const pathMatch = window.location.pathname.match(/^\/([^/]+)\//);
      if (pathMatch && pathMatch[1]) {
        repo = pathMatch[1];
      }
    }
    if (repo && !src.startsWith(`/${repo}`)) {
      return `/public/${repo}${src.startsWith("/") ? src : "/" + src}`;
    }
  }
  return src;
}
