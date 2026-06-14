import Image from "next/image";

export default function ContactUsTh() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#011a54]/60 z-10" />
        {/* รูปพื้นหลังตรงนี้สามารถเปลี่ยนเป็นรูปลูกค้าคอลเซ็นเตอร์ หรือรูปเรือสวยๆ ได้ครับ */}
        <Image
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Love Andaman"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            ติดต่อเรา
          </h1>
          <p className="text-lg md:text-xl text-white font-light drop-shadow-md">
            เราพร้อมดูแลและตอบทุกข้อสงสัย เพื่อให้ทริปของคุณสมบูรณ์แบบที่สุด
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* ข้อมูลการติดต่อ (ฝั่งซ้าย) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#011a54] mb-2">ช่องทางการติดต่อ</h2>
              <div className="w-16 h-1 bg-[#00b5e2] rounded-full mb-8"></div>
              <p className="text-gray-600 font-light leading-relaxed mb-8">
                ไม่ว่าคุณจะมีคำถามเกี่ยวกับการจองทริป แพ็กเกจทัวร์ หรือต้องการคำแนะนำเพิ่มเติม ทีมงาน Love Andaman ยินดีให้บริการอย่างเต็มที่ครับ
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00b5e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011a54] mb-1">ที่ตั้งสำนักงาน (ภูเก็ต)</h3>
                  <p className="text-gray-600 font-light">
                    บริษัท เลิฟ อันดามัน จำกัด<br/>
                    (สามารถแก้ที่อยู่ให้ตรงกับความจริงได้ตรงนี้เลยครับ)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00b5e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011a54] mb-1">เบอร์โทรศัพท์</h3>
                  <p className="text-gray-600 font-light">
                    081-999-9999 (ฝ่ายจองทัวร์)<br/>
                    076-111-111 (สำนักงาน)
                  </p>
                </div>
              </div>

              {/* Social / LINE */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00b5e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011a54] mb-1">LINE Official Account</h3>
                  <p className="text-gray-600 font-light">@loveandaman</p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00b5e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011a54] mb-1">เวลาทำการ</h3>
                  <p className="text-gray-600 font-light">เปิดทำการทุกวัน จันทร์ - อาทิตย์<br/>เวลา 08:00 - 20:00 น.</p>
                </div>
              </div>

            </div>
          </div>

          {/* แบบฟอร์มติดต่อ (ฝั่งขวา) */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-2xl font-bold text-[#011a54] mb-6">ส่งข้อความถึงเรา</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">ชื่อ - นามสกุล *</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b5e2]/50 focus:border-[#00b5e2] transition-colors" placeholder="กรอกชื่อของคุณ" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">เบอร์โทรศัพท์ *</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b5e2]/50 focus:border-[#00b5e2] transition-colors" placeholder="08X-XXX-XXXX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">อีเมล</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b5e2]/50 focus:border-[#00b5e2] transition-colors" placeholder="example@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">ข้อความ / สิ่งที่ต้องการสอบถาม *</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00b5e2]/50 focus:border-[#00b5e2] transition-colors resize-none" placeholder="พิมพ์รายละเอียดที่ต้องการสอบถามที่นี่..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#011a54] hover:bg-[#00b5e2] text-white font-semibold py-4 rounded-xl transition-colors duration-300 shadow-md">
                ส่งข้อความ
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* แผนที่ (Google Maps) */}
      <section className="w-full h-[400px] bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.5330364952044!2d98.3965!3d7.8804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fd2f6380a3%3A0x8035654c6001a40!2sPhuket!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </main>
  );
}