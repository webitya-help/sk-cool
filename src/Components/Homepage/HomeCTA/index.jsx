'use client';

import { WhatsApp, Phone } from '@mui/icons-material';
import Link from 'next/link';

export default function HomeFinalCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to book a service with SK COOL Service?
        </h2>
        <p className="text-lg mb-8">
          Fast, affordable, and reliable AC, fridge, and washing machine services — just a click away!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="https://wa.me/919990939208"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 transition rounded-lg text-white"
          >
            <WhatsApp className="mr-2" />
            Chat on WhatsApp
          </Link>

          <Link
            href="tel:+919990939208"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-800 hover:bg-gray-100 transition rounded-lg font-semibold"
          >
            <Phone className="mr-2" />
            Call Now
          </Link>
        </div>
      </div>
    </section>
  );
}
