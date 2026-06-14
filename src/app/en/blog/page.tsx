import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client"; 

// ปิด Cache เพื่อให้อัปเดตข้อมูลสดใหม่เสมอเหมือนฝั่งไทย
export const revalidate = 0;

// ─── SEO METADATA FOR ENGLISH BLOG (แปล 1:1 จากไทย) ───
export const metadata: Metadata = {
  title: "Andaman Travel Articles | Similan & Surin Island Reviews | Love Andaman",
  description: "Collection of travel articles about the Andaman Sea. Deep dive reviews of Similan Islands, Surin Islands, Maya Bay, Phang Nga, and Maiton Island. Complete diving preparation guide by Love Andaman.",
  keywords: ["Similan review", "Diving guide", "Travel Surin Island", "Maya Bay", "Travel Articles", "Love Andaman Blog"],
  openGraph: {
    title: "Andaman Travel Articles, Reviews & Travel Guides | Love Andaman",
    description: "Update preparation tips, premium snorkeling spot insights, and reviews of popular destinations in the Andaman Sea.",
    url: "https://www.yourdomain.com/en/blog",
    siteName: "Love Andaman",
    images: [
      {
        url: "https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/699397755_1419638213537198_7964535579660873584_n.jpg",
        width: 1200,
        height: 630,
        alt: "Love Andaman Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// คำสั่งดึงข้อมูลจากหลังบ้าน (ใช้ Query เดียวกับฝั่งไทย)
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  publishedAt,
  "description": metaDescription,
  "category": categories[0]->title
}`;

export default async function ArticlesPageEn() {
  // ดึงข้อมูลจาก Sanity 
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <main className="min-h-screen bg-gray-50 pt-10 pb-24">
      
      {/* ส่วนหัวหน้าบล็อก (แปลเป็นอังกฤษ) */}
      <section className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black text-[#011a54] mb-4 tracking-tight">
          Travel <span className="text-[#00b5e2]">Articles</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 font-light">
          Update news, preparation tips, and reviews of the most popular destinations in the Andaman Sea with Love Andaman.
        </p>
      </section>

      {/* Grid บทความ */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {posts.map((article: any) => {
            // ฟอร์แมตวันที่ให้เป็นสากลแบบอังกฤษ (en-US)
            const formattedDate = article.publishedAt 
              ? new Date(article.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
              : "No date specified";

            return (
              <article key={article._id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col">
                
                {/* รูปภาพ */}
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-gray-100">
                  {article.category && (
                    <div className="absolute top-4 left-4 bg-[#011a54] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
                      {article.category}
                    </div>
                  )}
                  <Image 
                    src={article.imageUrl || "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop"} 
                    alt={article.title || "Love Andaman"} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* เนื้อหา */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {formattedDate}
                  </div>
                  
                  {/* เปลี่ยน Link เส้นทางให้วิ่งไปโฟลเดอร์ภาษาอังกฤษ /en/blog/ */}
                  <Link href={`/en/blog/${article.slug}`} className="block group-hover:text-[#00b5e2] transition-colors mb-3">
                    <h2 className="text-xl font-bold text-[#011a54] leading-tight group-hover:text-[#00b5e2] transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                    {article.description || "Read full travel tips and detailed reviews in this article..."}
                  </p>

                  <div className="mt-auto">
                    <Link href={`/en/blog/${article.slug}`} className="text-[#00b5e2] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  </div>
                </div>

              </article>
            );
          })}

        </div>
      </section>

    </main>
  );
}