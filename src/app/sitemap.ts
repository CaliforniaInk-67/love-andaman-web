import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // 🔥 เปลี่ยนเป็น URL บน Netlify ของคุณอารียาเรียบร้อย (สามารถปรับชื่อตามที่ตั้งจริงบน Netlify ได้เลยครับ)
  const baseUrl = 'https://love-andaman-areeya.netlify.app'

  return [
    // 1. หน้าแรกหลัก (Main Page)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // 2. หน้าบทความภาษาไทย (TH Blog)
    {
      url: `${baseUrl}/th/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 3. หน้าบทความภาษาอังกฤษ (EN Blog)
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 4. หน้าสินค้า/ทัวร์ (Product Page)
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // 5. หน้าเกี่ยวกับเรา (About Us)
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // 6. หน้าติดต่อเรา (Contact Us)
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}