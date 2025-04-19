'use client';

import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

export default function ContactUsHero() {
  return (
    <section
      className="relative w-full h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('/home/contact.webp')", // Add this image
      }}
    >
  <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-4xl px-6 md:px-16 text-white">
        <div className="flex items-center gap-3 mb-4">
          <ContactPhoneIcon className="text-4xl text-yellow-400" />
          <h1 className="text-3xl md:text-5xl font-bold">Get in Touch with SK COOL Service</h1>
        </div>
        <p className="text-lg md:text-xl max-w-2xl">
          We're here to help! Contact us for AC Rental, AC Repair, Washing Machine and Fridge services.
        </p>
      </div>
    </section>
  );
}
