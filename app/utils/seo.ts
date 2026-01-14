export interface SeoData {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

function ensureMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  const selector = `meta[${attr}="${name}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute('content', content);
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }
}

export function setMeta(data: SeoData) {
  const title = data.title;
  const description = data.description;
  const url = data.url ?? window.location.href;

  // Standard meta
  let el = document.querySelector('title') as HTMLTitleElement | null;
  if (el) el.textContent = title;

  ensureMetaTag('description', description, 'name');
  // Canonical URL
  let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  // Open Graph
  ensureMetaTag('og:title', title, 'property');
  ensureMetaTag('og:description', description, 'property');
  ensureMetaTag('og:url', url, 'property');
  ensureMetaTag('og:type', data.type ?? 'website', 'property');
  // Twitter
  ensureMetaTag('twitter:card', 'summary_large_image', 'name');
  ensureMetaTag('twitter:title', title, 'name');
  ensureMetaTag('twitter:description', description, 'name');
  // Optional image handling if provided
  if (data.image) {
    ensureMetaTag('og:image', data.image, 'property');
    ensureMetaTag('twitter:image', data.image, 'name');
  }
}
