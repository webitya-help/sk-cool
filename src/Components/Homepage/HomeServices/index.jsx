'use client';

import {
  AcUnit,
  HomeRepairService,
  LocalLaundryService,
  Kitchen,
} from '@mui/icons-material';

export default function HomeServicesSection() {
  const services = [
    {
      title: 'AC On Rent',
      desc: 'Best quality AC available for rent at affordable prices.',
      icon: <AcUnit fontSize="large" className="text-sky-500" />,
    },
    {
      title: 'AC Repair',
      desc: 'Quick and reliable AC repair at your doorstep.',
      icon: <HomeRepairService fontSize="large" className="text-emerald-500" />,
    },
    {
      title: 'Washing Machine Repair',
      desc: 'Expert technicians to fix all types of washing machines.',
      icon: <LocalLaundryService fontSize="large" className="text-indigo-500" />,
    },
    {
      title: 'Fridge Repair',
      desc: 'Affordable and professional fridge repair service.',
      icon: <Kitchen fontSize="large" className="text-rose-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-500 text-lg">
          Reliable and affordable home appliance services across the city.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-sm hover:shadow-lg p-6 text-center transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
