'use client';

import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WashingRepairFinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your Washing Machine Fixed Today!
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Fast and affordable repairs by experienced technicians. Contact us now for hassle-free service at your doorstep.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="tel:9990939208">
            <button className="bg-white text-blue-700 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow">
              <PhoneIcon /> Call Now
            </button>
          </Link>

          <Link href="https://wa.me/9990939208" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2 shadow">
              <WhatsAppIcon /> WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
