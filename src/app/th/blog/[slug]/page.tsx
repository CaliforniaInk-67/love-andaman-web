import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

// ปิด Cache เพื่อให้กดเปลี่ยนเนื้อหาหลังบ้านแล้วหน้าเว็บอัปเดตทันที
export const revalidate = 0;

// ─── 1. คำสั่งดึงข้อมูลบทความเดี่ยวจาก Slug ───
const POST_DETAIL_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "imageUrl": mainImage.asset->url,
  publishedAt,
  body,
  "category": categories[0]->title
}`;

// ─── 2. ส่วนตั้งค่าการแสดงผลตัวหนังสือภายใน Body (Portable Text Customization) ───
const components = {
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-[#011a54] mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-[#011a54] mt-6 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-[#011a54] mt-4 mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-600 leading-relaxed mb-4 font-light text-base md:text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 pl-4 text-gray-600 font-light space-y-2">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 pl-4 text-gray-600 font-light space-y-2">{children}</ol>,
  },
};

// ─── 3. MAIN COMPONENT ───
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // ดึงข้อมูลบทความโดยส่งค่า slug ไปค้นหา
  const post = await client.fetch(POST_DETAIL_QUERY, { slug });

  // ถ้าไม่พบบทความ (เช่น พิมพ์ URL มั่ว) ให้โยนไปหน้า 404 Not Found
  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("th-TH", { day: "numeric", month: "long", year: "numeric" })
    : "ไม่ระบุวันที่";

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* ปุ่มย้อนกลับ */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/th/blog" className="text-sm font-medium text-[#00b5e2] hover:text-[#011a54] inline-flex items-center gap-2 transition-colors group">
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          กลับไปหน้าบทความ
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 mt-6">
        {/* ส่วนหัวบทความ */}
        <header className="mb-8 text-center md:text-left">
          {post.category && (
            <span className="bg-[#00b5e2]/10 text-[#00b5e2] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#011a54] mt-4 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formattedDate}
          </div>
        </header>

        {/* รูปภาพหน้าปกใหญ่ */}
        <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden relative shadow-md bg-gray-200 mb-12">
          <Image
            src={post.imageUrl || "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000&auto=format&fit=crop"}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ─── เนื้อหาบทความจาก Sanity (Body) ─── */}
        <div className="prose max-w-none bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          {post.body ? (
            <PortableText value={post.body} components={components} />
          ) : (
            <p className="text-gray-400 font-light italic">ไม่มีเนื้อหาสำหรับบทความนี้</p>
          )}
        </div>
      </article>
    </main>
  );
}