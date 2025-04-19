'use client';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'Ankit Sharma',
    review: 'Super fast AC repair! Technician arrived within 30 minutes and fixed the issue quickly.',
    location: 'Faridabad',
    rating: 5,
  },
  {
    name: 'Priya Mehra',
    review: 'I rented an AC from them this summer. Affordable price and great cooling.',
    location: 'Ballabhgarh',
    rating: 4,
  },
  {
    name: 'Rahul Verma',
    review: 'Highly recommended for AC servicing. My split AC feels brand new!',
    location: 'Sector 21C, Faridabad',
    rating: 5,
  },
];

export default function AcRepairTestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’re trusted by hundreds of happy customers across Faridabad and nearby areas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl border border-gray-200"
          >
            <FormatQuoteIcon className="text-4xl text-blue-500 mb-4" />
            <p className="text-gray-700 italic mb-4">"{item.review}"</p>
            <div className="flex items-center gap-2 mb-1">
              <strong>{item.name}</strong>
              <span className="text-sm text-gray-500">— {item.location}</span>
            </div>
            <div className="flex gap-1 mt-2">
              {Array(item.rating).fill(0).map((_, i) => (
                <StarIcon key={i} className="text-yellow-500 text-sm" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
