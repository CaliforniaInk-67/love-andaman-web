import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ─── 1. SEO METADATA FOR ENGLISH PAGE ───
export const metadata: Metadata = {
  title: "Love Andaman | Andaman Sea Tour Packages & Day Trips (Updated 2026)",
  description: "Explore the Andaman Sea with Love Andaman. Premium tours to Similan Islands, Surin Islands, Phi Phi, and Koh Rok. Best service, professional guides, and eco-friendly travel.",
  keywords: ["Love Andaman", "Similan Island Tour", "Surin Island Tour", "Phuket Day Trip", "Andaman Island Snorkeling"],
  openGraph: {
    title: "Love Andaman | Premium Andaman Sea Tour Packages",
    description: "Discover the paradise of the Andaman Sea with our top-rated premium day trips and excursions.",
    url: "https://www.yourdomain.com/en",
    siteName: "Love Andaman",
    images: [
      {
        url: "https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-6/657582917_1380694640764889_3263981997159765586_n.jpg",
        width: 1200,
        height: 630,
        alt: "Love Andaman Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// ─── 2. TYPES / INTERFACES ───
interface TourPackage {
  id: number;
  isBestSeller: boolean;
  imageSrc: string;
  titleTh: string;
  titleEn: string;
  detailsTh: string[];
  detailsEn: string[];
  priceStarting: number;
}

// ─── 3. DATA LAYER ───
const FEATURED_TOURS: TourPackage[] = [
  {
    id: 1,
    isBestSeller: true,
    imageSrc: 'https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/699397755_1419638213537198_7964535579660873584_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEw1nr-adSKOq2pyplCqTIWGgWI9nsAZ3YaBYj2ewBnds_qHLDJuCvwbcLmoklHqU4KqgTYKmMO1ysHMfTmn7j-&_nc_ohc=ZY5ZT5KJuWEQ7kNvwHDrA-a&_nc_oc=AdoQTAKsdR9saJoqex_iK0qklDYtmVXNzBucI221A1Wb3u33LCO7uaxckZJiSG6fabA&_nc_zt=23&_nc_ht=scontent.fbkk33-1.fna&_nc_gid=lFg6LAwn7ZFq_IjoFetlyg&_nc_ss=7b2a8&oh=00_Af-sJABB5mpBN7KHvPyIT985wG6psksKidr9qV1bKLA7xA&oe=6A3349B3',
    titleTh: 'ทัวร์หมู่เกาะสิมิลัน 1 วัน',
    titleEn: 'Similan Islands Day Tour',
    detailsTh: ['เดินทางด้วยเรือสปีดโบ๊ตจากภูเก็ต', 'ดำน้ำชมปะการัง 2 จุด', 'พักผ่อนบนเกาะสิมิลัน', 'รวมอาหารกลางวัน อุปกรณ์ดำน้ำ และประกัน'],
    detailsEn: ['Full-day speedboat trip from Phuket', '2 snorkeling stops with crystal-clear water', 'Relax on the famous Similan Islands beaches', 'Lunch, snorkeling gear, and insurance included'],
    priceStarting: 2990,
  },
  {
    id: 2,
    isBestSeller: false,
    imageSrc: 'https://scontent.fbkk33-3.fna.fbcdn.net/v/t39.30808-6/699713209_1419638263537193_5806318088677678744_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGuNy2Vk31NZv1zzMYEhbIvHWW4VVKDK1IdZbhVUoMrUmGL86SfXS4UYIu8304md-qD6UpOM2PE2Oo7bTxOjHnL&_nc_ohc=7k68TpZbzyMQ7kNvwHBKzAp&_nc_oc=AdoCxKc5XZfJvqfMfKI0nO2zNrJPTSVc0GcfzvHm5Sa2Q9uqMRcXGhF24XznKX-1Iqs&_nc_zt=23&_nc_ht=scontent.fbkk33-3.fna&_nc_gid=E8Tfyl4nrN_aEMAQ2h3L7w&_nc_ss=7b2a8&oh=00_Af-iC-SNi6l7WPeTKTnptXprWjsU8IihJ1WNyZhYx5t-gQ&oe=6A333C63',
    titleTh: 'ทัวร์หมู่เกาะสุรินทร์ 1 วัน',
    titleEn: 'Surin Islands Day Tour',
    detailsTh: ['เที่ยวหมู่เกาะสุรินทร์ด้วยเรือสปีดโบ๊ต', 'ดำน้ำชมปะการังและสัตว์ทะเลหลากหลายชนิด', 'เยี่ยมชมหมู่บ้านชาวมอแกน', 'รวมอาหารกลางวัน อุปกรณ์ดำน้ำ และประกัน'],
    detailsEn: ['Full-day speedboat tour to Surin Islands', 'Discover vibrant coral reefs and marine life', 'Visit the traditional Moken Sea Gypsy Village', 'Lunch, snorkeling equipment, and insurance included'],
    priceStarting: 2790,
  },
  {
    id: 3,
    isBestSeller: false,
    imageSrc: 'https://scontent.fbkk33-2.fna.fbcdn.net/v/t39.30808-6/704547050_1424128196421533_616920843179843076_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErhFlcwJl9zbLta4UrLol0fb6GDYAXzaN9voYNgBfNowEr0CAyxlX9NaCOaK8rTiwf3oktdn62vPKkl89OyJml&_nc_ohc=lTZrCrrYdmkQ7kNvwGpvcUt&_nc_oc=Adrw7Pneg_0i2Q3yfySGZN_cztS8AwwG4gRnHKsUpYQw5xM3Cma9C_XlXcP5qj-W3H4&_nc_zt=23&_nc_ht=scontent.fbkk33-2.fna&_nc_gid=pH27sMBrDK692GahPOxbBA&_nc_ss=7b2a8&oh=00_Af_vYE2CvV2bHmo3FIBJXhdtuULuSBMTLJ6aFFc6Iy1zPw&oe=6A33283F',
    titleTh: 'ทัวร์เกาะพีพี - อ่าวมาหยา 1 วัน',
    titleEn: 'Phi Phi & Maya Bay Day Tour',
    detailsTh: ['เยี่ยมชมอ่าวมาหยา สถานที่ถ่ายทำภาพยนตร์ระดับโลก', 'เล่นน้ำที่ปิเละลากูน', 'ชมวิวถ้ำไวกิ้งและอ่าวลิง', 'รวมอาหารกลางวัน เครื่องดื่ม และประกัน'],
    detailsEn: ['Visit the world-famous Maya Bay', 'Swim in the stunning Pileh Lagoon', 'Explore Viking Cave and Monkey Bay', 'Lunch, refreshments, and insurance included'],
    priceStarting: 2490,
  },
];

// ─── 4. SUB-COMPONENT: PRODUCT CARD ───
function ProductCard({ pkg }: { pkg: TourPackage }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative flex flex-col h-full">
      {pkg.isBestSeller && (
        <div className="absolute top-4 right-4 bg-[#00b5e2] text-white text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-md">
          Best Seller
        </div>
      )}
      <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-100">
        <Image
          src={pkg.imageSrc}
          alt={pkg.titleEn}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#011a54] mb-1 tracking-tight line-clamp-1">
            {pkg.titleEn}
          </h3>
          <p className="text-sm font-medium text-gray-400 mb-4 italic">
            {pkg.titleTh}
          </p>
          <div className="text-sm text-[#4a4a4a] mb-5 space-y-1.5 font-light">
            <span className="font-semibold text-[#011a54]/90 block mb-1">Tour Details:</span>
            <ul className="space-y-1">
              {pkg.detailsEn.map((detail, index) => (
                <li key={index} className="flex items-start gap-1.5 text-xs md:text-sm">
                  <span className="text-[#00b5e2] mt-1 text-[10px]">●</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100 space-y-4">
          <div className="text-right">
            <span className="text-xs text-gray-400 font-light block">Starting From:</span>
            <p className="text-2xl font-bold text-[#011a54]">
              {pkg.priceStarting.toLocaleString()}
              <span className="text-xs font-light text-gray-500 ml-1">THB/Person</span>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="bg-[#011a54] hover:bg-[#001036] text-white text-xs md:text-sm font-bold py-3 rounded-xl transition-all shadow-sm">
              Book Now
            </button>
            <button type="button" className="bg-[#00b5e2] hover:bg-[#0094ba] text-white text-xs md:text-sm font-bold py-3 rounded-xl transition-all shadow-sm">
              More Info
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── 5. MAIN PAGE COMPONENT ───
export default function HomePageEn() {
  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* 1. Banner Section (Optimized with Next.js Image) */}
      <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative bg-gray-200">
        <Image 
          src="https://scontent.fbkk4-1.fna.fbcdn.net/v/t39.30808-6/657582917_1380694640764889_3263981997159765586_n.jpg?stp=dst-jpg_tt6&cstp=mx3367x1245&ctp=s3367x1245&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF-o3QDj-SIi4km0LTjIwTO1eDqApqmyMXV4OoCmqbIxYZejmSn07nJMX2TDW_s-r317VN9DhBT9E7r8NDH0NCj&_nc_ohc=4ta4SyQ7FGsQ7kNvwFBu8an&_nc_oc=Adpow3hXrZruv3_zz9i8pWoLuZrGMe_Sl9iu6f3q-CSCp72W5q1O0Lwl4cZXBcivo9A&_nc_zt=23&_nc_ht=scontent.fbkk4-1.fna&_nc_gid=ip1mQG1vKpvlRwLCpDuN8A&_nc_ss=7b2a8&oh=00_Af9DbAQCyaF_4fiwNZZsL1u-ewkZxjdgU9jXEierjHcUpw&oe=6A334470" 
          alt="Love Andaman Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 2. Hero Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#011a54] mb-6 tracking-wide">
            Experience the Charm of the Andaman Sea with Love Andaman
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Phuket's No.1 tour operator, offering premium travel packages to Similan Islands, Surin Islands, and Phi Phi Islands with exceptional services.
          </p>
        </header>
        
        <Link 
          href="/en/product" 
          className="inline-block bg-[#00b5e2] hover:bg-[#0094ba] text-white font-bold px-10 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          View All Packages
        </Link>
      </section>

      {/* 3. Tour Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TOURS.map((tour) => (
            <div key={tour.id}>
              <ProductCard pkg={tour} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}