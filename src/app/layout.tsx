import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

// 1. Import Navbar ตัวใหม่ที่มีระบบสลับภาษาเข้ามา
import Navbar from "@/components/LanguageSwitcher";

// ตั้งค่าฟอนต์ Kanit
const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Love Andaman | ทัวร์ทะเลอันดามัน สิมิลัน สุรินทร์ พีพี",
  description:
    "บริษัททัวร์อันดับ 1 ของภูเก็ต ให้บริการแพ็กเกจท่องเที่ยวทะเลอันดามัน หมู่เกาะสิมิลัน หมู่เกาะสุรินทร์ และเกาะพีพี",
  keywords:
    "Love Andaman, ทัวร์ภูเก็ต, ทัวร์สิมิลัน, ทัวร์สุรินทร์, เที่ยวทะเล",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable}`}
    >
      <body className={`${kanit.className} bg-gray-50 text-[#4a4a4a]`}>

        {/* 2. เรียกใช้ Navbar ตัวใหม่ตรงนี้ (มันจะไปดึงโค้ดจาก LanguageSwitcher.tsx มาแสดง) */}
        <Navbar />

        {/* เนื้อหาหน้าเว็บอื่นๆ จะแสดงตรงนี้ */}
        {children}

      </body>
    </html>
  );
}