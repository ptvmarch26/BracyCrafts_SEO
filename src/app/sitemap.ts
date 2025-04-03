import { NextResponse } from 'next/server';
import { products } from '@/data/MockProduct';

export async function GET() {
  const baseUrl = 'https://bracycrafts-seo.vercel.app/';

  const productUrls = products
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/product/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    `
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>${baseUrl}/shop</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.9</priority>
    </url>
    ${productUrls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
