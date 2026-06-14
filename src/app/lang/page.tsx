export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="max-w-4xl text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            สัมผัสเสน่ห์ทะเลอันดามัน กับ Love Andaman
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            บริษัท เลิฟอันดามัน จำกัด ผู้ให้บริการทัวร์ทะเลครบวงจร
            พาคุณเที่ยวเกาะสวยระดับโลก เช่น ภูเก็ต พีพี เกาะสิมิลัน
            สุรินทร์ และพังงา ด้วยเรือสปีดโบ๊ตมาตรฐาน
            ทีมงานมืออาชีพ และประสบการณ์กว่า 10 ปี
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">
              ดูแพ็กเกจทัวร์
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg">
              จองทริปเลย
            </button>
          </div>

        </div>
      </section>

      {/* English Section */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Explore the Andaman Sea with Love Andaman
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Love Andaman Co., Ltd. is a leading marine tour operator in
            Thailand, offering unforgettable island experiences to Phuket,
            Phi Phi, Similan, Surin, and Phang Nga.

            Enjoy premium speedboat tours, professional guides, and over
            10 years of trusted service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              View Tours
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">
              Book Now
            </button>
          </div>

        </div>

      </section>

      {/* Services */}
      <section className="py-20 bg-gray-100 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            บริการของเรา
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                🏝️ ทัวร์เกาะยอดนิยม
              </h3>

              <p className="text-gray-600">
                พีพี สิมิลัน สุรินทร์ พังงา
                ครบทุกเส้นทางยอดฮิต
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                🚤 เรือมาตรฐานปลอดภัย
              </h3>

              <p className="text-gray-600">
                สปีดโบ๊ตคุณภาพ
                พร้อมอุปกรณ์ความปลอดภัยครบครัน
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4">
                👨‍✈️ ทีมงานมืออาชีพ
              </h3>

              <p className="text-gray-600">
                ไกด์และทีมบริการดูแลตลอดทริป
                ทั้งภาษาไทยและอังกฤษ
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

