'use client';

import { Phone, WhatsApp, Room } from '@mui/icons-material';
import Link from 'next/link';

export default function HomeContactSection() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question or need service? We’re just a message or call away!
          </p>

          <div className="flex flex-col space-y-4">
            <Link
              href="tel:+919990939208"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Phone className="mr-2" />
              Call Now
            </Link>

            <Link
              href="https://wa.me/919990939208"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <WhatsApp className="mr-2" />
              WhatsApp Us
            </Link>

            <div className="flex items-start text-gray-700 mt-4">
              <Room className="mr-2 mt-1" />
              <p>
                Rajiv Colony, Gali no. 4,
                <br />
                Near KTM showroom
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.503139118835!2d77.0832373!3d28.4698197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d586a04d7fd%3A0x3df07be6d4b1e6f4!2sRajiv%20Colony%2C%20Sector%2023%2C%20Faridabad%2C%20Haryana%20121005!5e0!3m2!1sen!2sin!4v1713537596931"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
