'use client';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'Ravi Sharma',
    review:
      'Got an AC on rent for summer, and the service was excellent! Quick setup and cool performance.',
    rating: 5,
  },
  {
    name: 'Neha Verma',
    review:
      'Affordable and very professional. The technician was polite and installed the AC neatly.',
    rating: 4,
  },
  {
    name: 'Amit Chauhan',
    review:
      'Super satisfied with their AC rental service. Highly recommended for quick service!',
    rating: 5,
  },
];

export default function AcOnRentTestimonialsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        What Our Customers Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <FormatQuoteIcon className="text-blue-600 text-3xl mb-4" />
            <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">
                – {testimonial.name}
              </span>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
