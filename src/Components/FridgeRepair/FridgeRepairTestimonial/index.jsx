import StarIcon from '@mui/icons-material/Star';

export default function FridgeRepairTestimonials() {
  const testimonials = [
    {
      name: 'Ravi Sharma',
      comment: 'SK COOL Service fixed my fridge within hours. The technician was professional and polite. Highly recommend!',
    },
    {
      name: 'Neha Mehta',
      comment: 'Very affordable and super fast service. I’ll definitely call them again for any appliance repair.',
    },
    {
      name: 'Amit Khanna',
      comment: 'My fridge is working perfectly now. Thank you for the prompt support and great pricing!',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Customers Say</h2>
        <p className="text-gray-600 mt-3 text-lg">Trusted by hundreds of happy customers across the city.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex items-center mb-4 gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} fontSize="small" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">“{review.comment}”</p>
            <p className="font-semibold text-gray-900">– {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
