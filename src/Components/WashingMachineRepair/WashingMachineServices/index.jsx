'use client';

import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HandymanIcon from '@mui/icons-material/Handyman';

export default function ServiceHighlights() {
  return (
    <section className="bg-white py-16 px-6 md:px-16 border-t">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose Our Washing Machine Repair?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center gap-4">
            <BuildCircleIcon className="text-purple-600 text-5xl" />
            <h3 className="text-xl font-semibold">Experienced Technicians</h3>
            <p className="text-gray-600 text-sm max-w-sm">
              Our skilled professionals handle all washing machine brands and models — top load, front load, semi, or fully automatic.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <AccessTimeIcon className="text-blue-600 text-5xl" />
            <h3 className="text-xl font-semibold">Fast Response Time</h3>
            <p className="text-gray-600 text-sm max-w-sm">
              We’re known for quick turnarounds — most repairs are completed within a few hours of booking.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <HandymanIcon className="text-emerald-600 text-5xl" />
            <h3 className="text-xl font-semibold">Doorstep Convenience</h3>
            <p className="text-gray-600 text-sm max-w-sm">
              No need to haul your machine anywhere — we bring tools and parts directly to your home for hassle-free service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
