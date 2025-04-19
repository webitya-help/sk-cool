'use client';

import React from 'react';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const AboutContactDetailsWithMap = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <RoomIcon className="text-blue-600 mt-1" />
              <span>
                Rajiv Colony, Gali No. 4,<br />Near KTM Showroom, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="text-green-600" />
              <a href="tel:+919990939208" className="hover:underline">+91 99909 39208</a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="text-green-600" />
              <a href="https://wa.me/919990939208" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EmailIcon className="text-red-500" />
              <span>support@skcoolservice.in</span> {/* Replace with real email if needed */}
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
          <iframe
            title="SK COOL Service Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28026.585805484248!2d77.02228474707937!3d28.459439710533372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19a927843c9b%3A0x7a5be23bfa3c1ea9!2sRajiv%20Colony%2C%20Sector%2037%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1682178802445!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutContactDetailsWithMap;
