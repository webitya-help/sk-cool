'use client';

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function ACRentCtaSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Beat the Heat?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Get your AC on rent today! Quick installation, reliable service, and best prices guaranteed.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          href="tel:9990939208"
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <PhoneInTalkIcon />
          Call Now
        </Link>

        <Link
          href="https://wa.me/919990939208"
          target="_blank"
          className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition"
        >
          <WhatsAppIcon />
          WhatsApp Us
        </Link>
      </div>
    </section>
  );
}
