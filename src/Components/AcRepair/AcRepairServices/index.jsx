'use client';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SettingsIcon from '@mui/icons-material/Settings';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import OpacityIcon from '@mui/icons-material/Opacity';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import PowerOffIcon from '@mui/icons-material/PowerOff';

export default function AcRepairAllAcRepairServices() {
  const services = [
    {
      icon: <ElectricBoltIcon className="text-4xl text-red-500" />,
      title: 'No Cooling Problem',
      desc: 'Fixing gas leaks, compressor faults, or blocked filters that reduce cooling efficiency.',
    },
    {
      icon: <SettingsIcon className="text-4xl text-blue-500" />,
      title: 'AC Servicing',
      desc: 'Complete cleaning and maintenance to ensure optimal performance.',
    },
    {
      icon: <AcUnitIcon className="text-4xl text-cyan-500" />,
      title: 'Gas Refill',
      desc: 'Top-up refrigerant gas with proper leak check and seal.',
    },
    {
      icon: <ThermostatIcon className="text-4xl text-orange-500" />,
      title: 'Thermostat Issues',
      desc: 'Repairing faulty sensors and temperature control units.',
    },
    {
      icon: <WaterDropIcon className="text-4xl text-blue-400" />,
      title: 'Water Leakage',
      desc: 'Fixing drainage pipe blockages or indoor unit condensation issues.',
    },
    {
      icon: <OpacityIcon className="text-4xl text-green-500" />,
      title: 'Bad Smell',
      desc: 'Removing fungus or dirt buildup that causes foul smells from vents.',
    },
    {
      icon: <SyncProblemIcon className="text-4xl text-yellow-500" />,
      title: 'Fan/Blower Issues',
      desc: 'Fixing noisy or non-working fans, blowers or motor issues.',
    },
    {
      icon: <PowerOffIcon className="text-4xl text-gray-700" />,
      title: 'Power Supply Faults',
      desc: 'Diagnosing and fixing wiring, circuit board or fuse problems.',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">All AC Repair Services We Provide</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From basic servicing to complex repairs — we handle everything to keep your AC running smooth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
