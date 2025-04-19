'use client';

import {
  Bolt,
  ThumbUp,
  Handyman,
  MonetizationOn,
} from '@mui/icons-material';

export default function HomeWhyChooseUs() {
  const reasons = [
    {
      title: 'Fast Service',
      desc: 'We provide quick response and same-day services.',
      icon: <Bolt fontSize="large" className="text-yellow-500" />,
    },
    {
      title: 'Trusted Technicians',
      desc: 'Our team is highly experienced and certified.',
      icon: <Handyman fontSize="large" className="text-blue-500" />,
    },
    {
      title: 'Affordable Pricing',
      desc: 'Transparent pricing with no hidden charges.',
      icon: <MonetizationOn fontSize="large" className="text-green-500" />,
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Rated highly by customers for our reliable service.',
      icon: <ThumbUp fontSize="large" className="text-purple-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-500 text-lg">
          We’re committed to delivering the best service experience.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg p-6 text-center transition"
          >
            <div className="mb-4 flex justify-center">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-600">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
