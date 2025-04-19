import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

export default function ContactUsInfoDetails() {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            Reach out to us anytime. We offer fast service in Rajiv Colony and nearby areas.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <PhoneIcon className="text-blue-600" />
              <Link href="tel:9990939208" className="hover:underline">
                +91 99909 39208
              </Link>
            </p>
            <p className="flex items-center gap-3">
              <WhatsAppIcon className="text-green-600" />
              <Link href="https://wa.me/9990939208" target="_blank" className="hover:underline">
                WhatsApp Us
              </Link>
            </p>
            <p className="flex items-center gap-3">
              <LocationOnIcon className="text-red-600" />
              Rajiv Colony, Gali no. 4, near KTM showroom
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-72 md:h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28021.224978645138!2d77.03402725!3d28.42175875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192e2b68cb95%3A0x2f4d6f278d8479b4!2sRajiv%20Colony%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1684563430191!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
