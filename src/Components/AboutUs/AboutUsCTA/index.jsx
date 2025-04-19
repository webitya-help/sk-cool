'use client';

import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

const AboutFinalCTA = () => {
  return (
    <section className="bg-blue-700 text-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Need Fast & Reliable Repair Services?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Whether it's your AC, fridge, or washing machine – our expert technicians are just a call or message away. Book your service now and enjoy hassle-free repair at your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="tel:9990939208">
            <button className="bg-white text-blue-700 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
              <PhoneIcon /> Call Now
            </button>
          </Link>

          <Link href="https://wa.me/919990939208" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2">
              <WhatsAppIcon /> WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTA;
