'use client';

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function WashingRepairWhyChooseUs() {
  const benefits = [
    {
      icon: <SupportAgentIcon className="text-blue-500 text-4xl" />,
      title: 'Expert Technicians',
      desc: 'Experienced professionals with deep knowledge of all washing machine brands.',
    },
    {
      icon: <HomeRepairServiceIcon className="text-green-500 text-4xl" />,
      title: 'At-Home Service',
      desc: 'Get your washing machine repaired without stepping out – we come to you.',
    },
    {
      icon: <ElectricBoltIcon className="text-yellow-500 text-4xl" />,
      title: 'Fast Diagnosis',
      desc: 'Quick issue detection and repair using the latest tools and methods.',
    },
    {
      icon: <AttachMoneyIcon className="text-purple-500 text-4xl" />,
      title: 'Affordable Pricing',
      desc: 'No hidden charges. Transparent and budget-friendly repair solutions.',
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Our Washing Machine Repair Service?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
