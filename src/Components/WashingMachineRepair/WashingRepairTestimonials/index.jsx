'use client';

import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    name: 'Priya Sharma',
    feedback:
      'Super quick service! The technician arrived the same day and fixed my LG washing machine within an hour. Highly recommend SK COOL Service.',
  },
  {
    name: 'Rahul Mehra',
    feedback:
      'Professional and polite team. They explained everything clearly and got my Whirlpool machine running like new. Great experience!',
  },
  {
    name: 'Anita Joshi',
    feedback:
      'Affordable, prompt, and reliable. Called them for my Samsung washing machine and they delivered exactly what was promised.',
  },
];

export default function WashingRepairTestimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Customers Say</h2>

        <div className="grid gap-8 md:grid-cols-3 text-left">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4">"{t.feedback}"</p>
              <p className="font-semibold text-gray-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
