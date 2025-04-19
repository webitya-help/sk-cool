'use client';

import { Star, FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Ravi Sharma',
    review:
      'Very professional and quick service. My AC was fixed within an hour. Highly recommend SK COOL Service!',
    rating: 5,
  },
  {
    name: 'Pooja Verma',
    review:
      'Took an AC on rent for summer. Super clean and perfectly working. Hassle-free experience.',
    rating: 4,
  },
  {
    name: 'Amit Tiwari',
    review:
      'My washing machine was repaired perfectly. They also explained the issue clearly. Great job!',
    rating: 5,
  },
];

export default function HomeTestimonialsSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-gray-500 text-lg">
          Real stories from satisfied customers
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl shadow-md p-6 relative"
          >
            <FormatQuote className="text-gray-300 text-5xl absolute top-4 right-4" />
            <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </div>
              <div className="flex text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} fontSize="small" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
