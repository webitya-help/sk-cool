'use client';

import Image from 'next/image';
import { Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function AcOnRentHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[75vh] bg-blue-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home/ac-rent.webp"
        alt="AC On Rent"
        fill
        className="object-cover object-center opacity-70"
        priority
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 bg-black/40">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          AC On Rent In Your Budget
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Get high-performance air conditioners on rent at the most affordable prices. Perfect for homes, offices, and events.
        </p>
        <div className="flex !space-x-4">
          <Button
            variant="contained"
            color="primary"
            href="tel:9990939208"
            startIcon={<PhoneIcon />}
            className="!bg-blue-600 hover:!bg-blue-700"
          >
            Call Now
          </Button>
          <Button
            variant="contained"
            href="https://wa.me/9990939208"
            startIcon={<WhatsAppIcon />}
            className="!bg-[#25D366] hover:!bg-[#1EBE5A]"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
