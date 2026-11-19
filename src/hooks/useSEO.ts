import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useSEO = ({ title, description, image, url }: SEOProps) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('Aaramam') ? title : `${title} • Aaramam Ayurveda Sanctuary`;
    document.title = fullTitle;

    // 2. Update Standard Description Meta
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);

      const twitterDesc = document.querySelector('meta[name="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // 3. Update Social Share Titles
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);

    // 4. Update Social Share Image
    if (image) {
      const fullImageUrl = image.startsWith('http')
        ? image
        : `https://aaramamcare.com${image.startsWith('/') ? '' : '/'}${image}`;

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', fullImageUrl);

      const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]');
      if (ogImageSecure) ogImageSecure.setAttribute('content', fullImageUrl);

      const ogImageType = document.querySelector('meta[property="og:image:type"]');
      if (ogImageType) {
        ogImageType.setAttribute('content', fullImageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg');
      }

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) twitterImage.setAttribute('content', fullImageUrl);
    }

    // 5. Update Canonical / OG URL
    if (url) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', url);

      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }
  }, [title, description, image, url]);
};
