'use client';

import React from 'react';

const values = [
  {
    title: 'Customer First',
    description:
      'Every decision we make starts with our customer\'s needs. We believe in service that listens, cares, and solves.',
  },
  {
    title: 'Integrity & Trust',
    description:
      'Transparent pricing, honest timelines, and trusted technicians — our integrity is the core of everything.',
  },
  {
    title: 'Innovation',
    description:
      'We stay updated with the latest in appliance tech and repair techniques to give you the best service every time.',
  },
];

const AboutMissionValuesSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Mission & Values
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We aim to provide fast, affordable, and reliable repair and rental services that make home appliances hassle-free for every household. Customer satisfaction is not just a goal — it’s our promise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionValuesSection;
