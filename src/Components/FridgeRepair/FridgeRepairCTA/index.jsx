import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function FridgeRepairFinalFridgeRepairCTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Fridge Not Cooling Properly?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Don’t wait! Book a technician now and get your fridge repaired the same day.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="tel:9990939208">
            <button className="bg-white text-blue-700 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center">
              <PhoneIcon /> Call Now
            </button>
          </Link>

          <Link href="https://wa.me/9990939208" target="_blank">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg text-white font-semibold flex items-center gap-2 justify-center">
              <WhatsAppIcon /> WhatsApp Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
