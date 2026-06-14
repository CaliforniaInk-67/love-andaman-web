import Image from "next/image";

export default function AboutUsEn() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://scontent.fbkk4-4.fna.fbcdn.net/v/t39.30808-6/701290635_1421550820012604_2312352573779179213_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1364&ctp=s2048x1364&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHu4ug0I-naK5-s7JzXf1TGly3Z3LlfHGaXLdncuV8cZhihoiKkl1YqkqEsg4B4bpzZG900C1MdomP_6WfyU6rq&_nc_ohc=tX5yhMMo850Q7kNvwHhzAUY&_nc_oc=AdoT8_JxD2cdTo4IgBestYNAvUZj_T5x653iLIK-MSP2WOKG0D2s7fn_rmXYuGgcQsI&_nc_zt=23&_nc_ht=scontent.fbkk4-4.fna&_nc_gid=U9CdNQnyuqlWjrU6aN1y-Q&_nc_ss=7b2a8&oh=00_Af8JdyuQRurzBGtStpaSX1pUdeJXc4XDmajD3UKT5LumzA&oe=6A3443B0"
          alt="Love Andaman Team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white font-light drop-shadow-md">
            The Pioneer of Eco-Tourism in the Andaman Sea
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#011a54]">
              The Beginning of <span className="text-[#00b5e2]">Love Andaman</span>
            </h2>
            <div className="w-20 h-1 bg-[#00b5e2] rounded-full"></div>
            
            <p className="text-gray-600 leading-relaxed font-light">
              Born from a deep passion for the beauty of the Thai seas, we wanted everyone to experience impressive journeys while preserving natural resources. 
              This inspired us to create unique trips under the concept of <span className="font-semibold text-[#011a54]">Eco-Tourism</span>.
            </p>
            
            <p className="text-gray-600 leading-relaxed font-light">
              From ocean-loving travelers to premium tour operators, for over 10 years, we have been dedicated to delivering the highest joy and safety to all tourists. 
              Today, we are proud to be one of Phuket's top tour companies, trusted by both Thai and international visitors.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1">
                <h3 className="text-4xl font-bold text-[#00b5e2] mb-2">10+</h3>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1">
                <h3 className="text-4xl font-bold text-[#00b5e2] mb-2">1M+</h3>
                <p className="text-sm text-gray-500">Happy Travelers</p>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://scontent.fbkk33-1.fna.fbcdn.net/v/t39.30808-6/698990278_1416966633804356_5643633863674386075_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGb0WKOKUGNnZpn1RjwIubhEdBW2aoME4MR0FbZqgwTgzKyojQmrQ2jjeD1sgwB6_ASwGdXrgjItf3eeBp-yAbd&_nc_ohc=BEWdgrzM06QQ7kNvwG6rK8W&_nc_oc=Adp8ucYfq-ZjMYlefjaRdGnA-jiGbyQWuvIvWSEQFavZlKUPdMlrVrz1v_Jr2bozifQ&_nc_zt=23&_nc_ht=scontent.fbkk33-1.fna&_nc_gid=H1jON8lnxHFmsiUzibtSLg&_nc_ss=7b2a8&oh=00_Af9Rmza5UaUm6G_JC1y_jw2w-AvDwSjs7AjhCLgmcPCxcw&oe=6A34413C"
              alt="Love Andaman Island Trip"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#011a54]/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
               <svg className="w-8 h-8 text-[#011a54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#011a54] mb-4">Vision</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              To be a global leader in marine tourism, delivering exceptional experiences alongside sustainable growth with nature and local communities.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-[#00b5e2]/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
               <svg className="w-8 h-8 text-[#00b5e2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#011a54] mb-4">Mission</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              To provide service with heart, ensuring maximum safety while driving and supporting marine conservation for future generations.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}