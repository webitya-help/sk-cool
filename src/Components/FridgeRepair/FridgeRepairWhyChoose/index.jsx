import VerifiedIcon from '@mui/icons-material/Verified';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function FridgeRepairFeaturesWhyChoose() {
  const features = [
    {
      icon: <VerifiedIcon className="text-green-500 text-4xl" />,
      title: 'Certified Technicians',
      desc: 'Skilled and experienced professionals ensure reliable fridge repair.',
    },
    {
      icon: <FlashOnIcon className="text-yellow-500 text-4xl" />,
      title: 'Same-Day Service',
      desc: 'We provide fast doorstep service across your area.',
    },
    {
      icon: <MonetizationOnIcon className="text-blue-500 text-4xl" />,
      title: 'Affordable Pricing',
      desc: 'Transparent and budget-friendly service charges.',
    },
    {
      icon: <LocalShippingIcon className="text-purple-500 text-4xl" />,
      title: 'Free Pickup & Drop',
      desc: 'We offer pickup/drop facility for major fridge issues.',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Our Fridge Repair Service?</h2>
        <p className="text-gray-600 mt-4 text-lg">
          We provide hassle-free fridge servicing backed by quality, speed, and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="p-6 border rounded-xl shadow hover:shadow-md transition bg-gray-50 text-center">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
