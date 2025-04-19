'use client';

import BuildIcon from '@mui/icons-material/Build';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function AcRepairHero() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-start bg-gray-900"
      style={{
        backgroundImage: "url('/home/ac-repair.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16 text-white">
        <div className="flex items-center gap-3 mb-4">
          <BuildIcon className="text-4xl text-blue-400" />
          <h1 className="text-3xl md:text-5xl font-bold">
            Expert AC Repair Services
          </h1>
        </div>

        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Fast, affordable, and reliable air conditioner repairs at your doorstep.
          Trusted by 1000+ customers across the city.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link href="tel:9990939208">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2">
              <PhoneIcon /> Call Now
            </button>
          </Link>

          <Link href="https://wa.me/9990939208" target="_blank">
            <button className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2">
              <WhatsAppIcon /> WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
