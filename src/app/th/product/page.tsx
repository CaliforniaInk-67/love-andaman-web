import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ─── 1. SEO METADATA FOR THAI TOURS PAGE ───
export const metadata: Metadata = {
  title: "แพ็กเกจทัวร์ทะเลอันดามัน เที่ยวสิมิลัน สุรินทร์ พีพี พรีเมียม | Love Andaman",
  description: "จองทัวร์วันเดย์ทริปทะเลอันดามันสุดพรีเมียมกับเลิฟอันดามัน เที่ยวหมู่เกาะสิมิลัน หมู่เกาะสุรินทร์ เกาะพีพี อ่าวมาหยา เดินทางด้วยเรือสปีดโบ๊ตปลอดภัย พร้อมบริการระดับ 5 ดาว เริ่มต้นเพียง 2,490 บาท",
  keywords: ["ทัวร์สิมิลัน", "ทัวร์หมู่เกาะสุรินทร์", "เที่ยวเกาะพีพี อ่าวมาหยา", "วันเดย์ทริปภูเก็ต", "Love Andaman แพ็กเกจ"],
  openGraph: {
    title: "แพ็กเกจทัวร์ทะเลอันดามัน วันเดย์ทริปพรีเมียม | Love Andaman",
    description: "สัมผัสประสบการณ์การท่องเที่ยวทะเลใต้อันดับหนึ่ง บริการครบครันทั้งอาหาร อุปกรณ์ดำน้ำ และประกันภัยการเดินทาง",
    url: "https://www.yourdomain.com/th/tours",
    siteName: "Love Andaman",
    images: [
      {
        url: "https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/699397755_1419638213537198_7964535579660873584_n.jpg",
        width: 1200,
        height: 630,
        alt: "Love Andaman Premium Tours",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};

// ─── 2. DATA LAYER (THAI ONLY UI) ───
const TOUR_PACKAGES_TH = [
  {
    id: "similan-day-tour",
    isBestSeller: true,
    imageSrc: 'https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/699397755_1419638213537198_7964535579660873584_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEw1nr-adSKOq2pyplCqTIWGgWI9nsAZ3YaBYj2ewBnds_qHLDJuCvwbcLmoklHqU4KqgTYKmMO1ysHMfTmn7j-&_nc_ohc=ZY5ZT5KJuWEQ7kNvwHDrA-a&_nc_oc=AdoQTAKsdR9saJoqex_iK0qklDYtmVXNzBucI221A1Wb3u33LCO7uaxckZJiSG6fabA&_nc_zt=23&_nc_ht=scontent.fbkk33-1.fna&_nc_gid=lFg6LAwn7ZFq_IjoFetlyg&_nc_ss=7b2a8&oh=00_Af-sJABB5mpBN7KHvPyIT985wG6psksKidr9qV1bKLA7xA&oe=6A3349B3',
    title: 'ทัวร์หมู่เกาะสิมิลัน 1 วัน',
    details: [
      'เดินทางด้วยเรือสปีดโบ๊ตจากภูเก็ต/พังงา',
      'ดำน้ำชมปะการังจุใจ 2 จุดไฮไลท์',
      'พักผ่อนบนหาดทรายขาวละเอียดของเกาะสิมิลัน',
      'รวมอาหารกลางวัน อุปกรณ์ดำน้ำ และประกันอุบัติเหตุ',
    ],
    priceStarting: 2990,
  },
  {
    id: "surin-day-tour",
    isBestSeller: false,
    imageSrc: 'https://scontent.fbkk33-3.fna.fbcdn.net/v/t39.30808-6/699713209_1419638263537193_5806318088677678744_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGuNy2Vk31NZv1zzMYEhbIvHWW4VVKDK1IdZbhVUoMrUmGL86SfXS4UYIu8304md-qD6UpOM2PE2Oo7bTxOjHnL&_nc_ohc=7k68TpZbzyMQ7kNvwHBKzAp&_nc_oc=AdoCxKc5XZfJvqfMfKI0nO2zNrJPTSVc0GcfzvHm5Sa2Q9uqMRcXGhF24XznKX-1Iqs&_nc_zt=23&_nc_ht=scontent.fbkk33-3.fna&_nc_gid=E8Tfyl4nrN_aEMAQ2h3L7w&_nc_ss=7b2a8&oh=00_Af-iC-SNi6l7WPeTKTnptXprWjsU8IihJ1WNyZhYx5t-gQ&oe=6A333C63',
    title: 'ทัวร์หมู่เกาะสุรินทร์ 1 วัน',
    details: [
      'เที่ยวหมู่เกาะสุรินทร์ด้วยเรือสปีดโบ๊ตสมรรถนะสูง',
      'ดำน้ำชมโลกใต้ทะเลที่สมบูรณ์และสัตว์ทะเลหายาก',
      'เยี่ยมชมวิถีชีวิตดั้งเดิมของชาวเลหมู่บ้านมอแกน',
      'รวมอาหารกลางวัน อุปกรณ์ดำน้ำครบชุด และประกัน',
    ],
    priceStarting: 2790,
  },
  {
    id: "phi-phi-maya-tour",
    isBestSeller: false,
    imageSrc: 'https://scontent.fbkk33-2.fna.fbcdn.net/v/t39.30808-6/704547050_1424128196421533_616920843179843076_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErhFlcwJl9zbLta4UrLol0fb6GDYAXzaN9voYNgBfNowEr0CAyxlX9NaCOaK8rTiwf3oktdn62vPKkl89OyJml&_nc_ohc=lTZrCrrYdmkQ7kNvwGpvcUt&_nc_oc=Adrw7Pneg_0i2Q3yfySGZN_cztS8AwwG4gRnHKsUpYQw5xM3Cma9C_XlXcP5qj-W3H4&_nc_zt=23&_nc_ht=scontent.fbkk33-2.fna&_nc_gid=pH27sMBrDK692GahPOxbBA&_nc_ss=7b2a8&oh=00_Af_vYE2CvV2bHmo3FIBJXhdtuULuSBMTLJ6aFFc6Iy1zPw&oe=6A33283F',
    title: 'ทัวร์เกาะพีพี - อ่าวมาหยา 1 วัน',
    details: [
      'เยี่ยมชมอ่าวมาหยา ธรรมชาติฟื้นฟูระดับโลก',
      'กระโดดน้ำเล่นที่ ปิเละลากูน สระว่ายน้ำกลางทะเล',
      'ล่องเรือชมวิวถ้ำไวกิ้ง และทักทายฝูงลิงที่อ่าวลิง',
      'รวมอาหารกลางวันบุฟเฟ่ต์ เครื่องดื่ม และประกัน',
    ],
    priceStarting: 2490,
  },
];

// ─── 3. COMPONENT ───
export default function ProductListingPageTh() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-6">
      
      {/* ส่วนหัวข้อหน้าเว็บ */}
      <header className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#011a54] mb-4 tracking-tight">
          แพ็กเกจทัวร์อันดามัน<span className="text-[#00b5e2]">สุดพิเศษ</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          เลือกสรรประสบการณ์การเดินทางที่ดีที่สุดในทะเลอันดามัน กับ Love Andaman ด้วยบริการระดับพรีเมียมและความปลอดภัยสูงสุด
        </p>
      </header>

      {/* บล็อกแสดงรายการ (Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {TOUR_PACKAGES_TH.map((pkg) => (
          <article 
            key={pkg.id} 
            className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative flex flex-col"
          >
            
            {/* ป้ายขายดี */}
            {pkg.isBestSeller && (
              <div className="absolute top-4 right-4 bg-[#00b5e2] text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-sm">
                ขายดี
              </div>
            )}

            {/* ส่วนรูปภาพ (Optimized Image) */}
            <div className="h-64 w-full relative overflow-hidden bg-gray-100">
              <Image 
                src={pkg.imageSrc} 
                alt={pkg.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority={pkg.isBestSeller} // ให้ความสำคัญโหลดรูปตัวขายดีก่อนเพื่อดัน LCP
              />
            </div>

            {/* ส่วนของเนื้อหาข้อมูลการ์ด */}
            <div className="p-6 flex-grow flex flex-col">
              
              {/* ชื่อทัวร์ */}
              <h2 className="text-xl font-bold text-[#011a54] mb-4 line-clamp-1 group-hover:text-[#00b5e2] transition-colors">
                {pkg.title}
              </h2>

              {/* รายละเอียดภาษาไทย */}
              <div className="text-sm text-gray-600 mb-6 flex-grow">
                <ul className="space-y-2.5 font-light">
                  {pkg.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#00b5e2] mt-1 text-xs">▼</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ส่วนแถบราคาและปุ่มด้านล่างสุด */}
              <div className="mt-auto pt-4 border-t border-gray-100 space-y-4">
                
                <div className="text-right">
                  <span className="text-xs text-gray-400 font-light">ราคาเริ่มต้น</span>
                  <p className="text-3xl font-black text-[#011a54]">
                    {pkg.priceStarting.toLocaleString()} 
                    <span className="text-sm font-light text-gray-500 ml-1">บาท / ท่าน</span>
                  </p>
                </div>

                {/* ปุ่มกดดำเนินการ เปลี่ยนเป็น Link เพื่อสร้าง SEO Structure ที่ดี */}
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href={`/th/tours/${pkg.id}`} 
                    className="bg-[#011a54] hover:bg-[#001036] text-white text-xs md:text-sm font-bold py-3 rounded-xl transition-all shadow-sm text-center flex items-center justify-center"
                  >
                    จองตอนนี้
                  </Link>

                  <Link 
                    href="https://line.me/ti/p/@loveandaman" // ลิงก์ตรงไปสอบถาม
                    target="_blank"
                    className="bg-white border-2 border-[#00b5e2] text-[#00b5e2] hover:bg-[#00b5e2] hover:text-white text-xs md:text-sm font-bold py-3 rounded-xl transition-all text-center flex items-center justify-center"
                  >
                    สอบถามเพิ่มเติม
                  </Link>
                </div>

              </div>

            </div>
          </article>
        ))}

      </div>
    </main>
  );
}