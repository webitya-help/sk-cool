'use client';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function AcRepairWhyChooseUs() {
  const features = [
    {
      icon: <ThumbUpIcon className="text-4xl text-blue-500" />,
      title: 'Trusted Technicians',
      desc: 'Our experienced team ensures top-quality repairs with a satisfaction guarantee.',
    },
    {
      icon: <SpeedIcon className="text-4xl text-green-500" />,
      title: 'Quick Service',
      desc: 'We offer same-day or next-day service so your AC is back running fast.',
    },
    {
      icon: <BuildCircleIcon className="text-4xl text-orange-500" />,
      title: 'Genuine Parts',
      desc: 'We use only genuine and tested components for long-lasting results.',
    },
    {
      icon: <SupportAgentIcon className="text-4xl text-purple-500" />,
      title: '24x7 Support',
      desc: 'Our team is just a call or WhatsApp away, anytime you need help.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SK COOL Service?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here's why thousands of customers trust us for reliable and affordable AC repair services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((item, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
