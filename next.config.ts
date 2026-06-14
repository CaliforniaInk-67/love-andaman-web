import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      // โดเมนของ Facebook
      {
        protocol: 'https',
        hostname: 'scontent.fbkk33-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbkk33-2.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbkk33-3.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fbkk4-1.fna.fbcdn.net',
      },
      // 👇 ตัวการที่ทำให้หน้า About พัง เพิ่มเข้ามาให้แล้วครับ
      {
        protocol: 'https',
        hostname: 'scontent.fbkk4-4.fna.fbcdn.net',
      },
    ],
  },
};

export default nextConfig;