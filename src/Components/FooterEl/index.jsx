'use client';
import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterEl = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Brand Logo and Description */}
        <div>
          <div className="flex items-center mb-3 text-white text-2xl font-semibold">
            <AcUnitIcon className="mr-2 text-blue-400" />
            SK COOL Service
          </div>
          <p className="text-gray-400">
            Fast and reliable service for AC, fridge, and washing machine repairs. We also provide ACs on rent.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>AC for Rent</li>
            <li>AC Repair</li>
            <li>Washing Machine Repair</li>
            <li>Fridge Repair</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Buttons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
          <div className="space-y-3">
            <a
              href="tel:+919990939208"
              className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 transition py-2 rounded-md text-white font-medium"
            >
              <PhoneIcon className="mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919990939208" // replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-md text-white font-medium"
            >
              <WhatsAppIcon className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-16 border-t border-gray-700 pt-6 text-sm">
        © {new Date().getFullYear()} SK COOL Service. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterEl;
