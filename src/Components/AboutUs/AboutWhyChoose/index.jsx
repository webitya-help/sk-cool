'use client';

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
  'Same-day service available',
  'Trained and verified technicians',
  'Transparent and affordable pricing',
  'Genuine spare parts used',
  'Service warranty provided',
  'Free consultation on call',
];

const AboutWhyChooseUs = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Why Choose <span className="text-blue-600">SK COOL Service</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              <CheckCircleIcon className="text-blue-500 mt-1" />
              <p className="text-gray-700 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
