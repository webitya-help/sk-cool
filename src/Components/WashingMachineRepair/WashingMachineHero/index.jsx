'use client';

import BuildIcon from '@mui/icons-material/Build';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WashingMachineRepairHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh]">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/washing-repair.webp')",
        }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16 text-white h-full flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <BuildIcon className="text-4xl text-cyan-400" />
          <h1 className="text-3xl md:text-5xl font-bold">Washing Machine Repairs</h1>
        </div>

        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Trusted washing machine service at your home – fast, affordable, and hassle-free.
        </p>

        <div className="flex gap-4">
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
