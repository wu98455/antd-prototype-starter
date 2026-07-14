/**
 * 拼接静态资源路径，兼容 GitHub Pages 子目录部署
 */
export function withPublicPath(assetPath: string): string {
  const base = process.env.PUBLIC_PATH || '/';
  const clean = assetPath.replace(/^\//, '');
  if (base === '/') return `/${clean}`;
  return `${base.replace(/\/?$/, '/')}${clean}`;
}
