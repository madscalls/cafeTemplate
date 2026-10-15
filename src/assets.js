/** Path to a file in public/, working both locally and under the GitHub Pages base path. */
export const img = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;
