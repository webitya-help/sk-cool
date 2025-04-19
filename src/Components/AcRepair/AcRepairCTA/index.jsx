'use client';

import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function AcRepairFinalCTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Fast & Reliable Service?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Whether it's AC repair, rental, or appliance service — we're just a call or WhatsApp away!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="tel:9990939208">
            <button className="bg-white text-blue-700 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
              <PhoneIcon /> Call Now
            </button>
          </Link>

          <Link href="https://wa.me/9990939208" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
              <WhatsAppIcon /> WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
