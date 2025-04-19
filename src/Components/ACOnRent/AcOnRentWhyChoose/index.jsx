'use client';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const benefits = [
  'Affordable monthly rentals',
  'High-quality & energy-efficient ACs',
  'Free installation & maintenance',
  'Flexible rental plans',
  'Same-day delivery & setup',
  '24/7 customer support',
];

export default function AcOnRentWhyChooseSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-lg text-gray-600">
          Get peace of mind with our reliable and affordable AC rental services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <CheckCircleIcon className="text-blue-600 mt-1" />
            <p className="text-base font-medium text-gray-700">{benefit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
