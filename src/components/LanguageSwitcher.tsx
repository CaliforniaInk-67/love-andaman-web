"use client"; // ต้องใส่บรรทัดนี้ด้านบนสุดเพราะเราจะใช้ usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  // ดึงค่า URL ปัจจุบันมาเช็ค
  const pathname = usePathname();
  
  // เช็คว่าตอนนี้อยู่ใน path /en หรือไม่ (ถ้าไม่ใช่ให้ถือเป็น /th)
  const isEn = pathname?.startsWith("/en");

  // เตรียมข้อมูลเมนูทั้ง 2 ภาษา (อ้างอิงจากในรูปของคุณ)
  const menuItems = {
    th: [
      { name: "หน้าหลัก", href: "/th" },
      { name: "บทความ", href: "/th/blog" },
      { name: "แพ็กเกจทัวร์", href: "/th/product" },
      { name: "เกี่ยวกับเรา", href: "/th/about" },
      { name: "ติดต่อเรา", href: "/th/contact" },
    ],
    en: [
      { name: "Home", href: "/en" },
      { name: "Articles", href: "/en/blog" },
      { name: "Tour Packages", href: "/en/product" },
      { name: "About Us", href: "/en/about" },
      { name: "Contact Us", href: "/en/contact" },
    ],
  };

  // เลือกใช้เมนูตามภาษาปัจจุบัน
  const currentMenu = isEn ? menuItems.en : menuItems.th;

  return (
    <nav className="bg-[#011a54] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* โลโก้ด้านซ้าย */}
        <Link href={isEn ? "/en" : "/th"} className="text-xl font-bold tracking-wide">
          Love Andaman
        </Link>

        {/* เมนูตรงกลาง (จะเปลี่ยนภาษาอัตโนมัติตาม URL) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {currentMenu.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              className="hover:text-[#00b5e2] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* ปุ่มสลับภาษาด้านขวา (เหมือนในรูปของคุณ) */}
        <div className="bg-white rounded-full px-1 py-1 flex items-center gap-1">
          <span className="text-xs font-bold text-gray-500 pl-3 pr-1">Language:</span>
          
          <Link 
            href={pathname?.replace(/^\/en/, '/th') || '/th'} 
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
              !isEn ? 'bg-[#011a54] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            TH
          </Link>
          
          <Link 
            href={pathname?.replace(/^\/th/, '/en') || '/en'} 
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
              isEn ? 'bg-[#011a54] text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            EN
          </Link>
        </div>

      </div>
    </nav>
  );
}