'use client';

import GavelIcon from '@mui/icons-material/Gavel';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <GavelIcon className="text-4xl" />
            <h1 className="text-3xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-lg max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto space-y-8 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By using our services or visiting our website, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Services Offered</h2>
          <p>
            SK COOL Service provides AC on rent, AC repair, washing machine repair, and fridge repair. Services are subject to availability and confirmation.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
          <p>
            All service payments must be made as agreed during service booking. Prices may vary depending on the scope and complexity of the work.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Service Warranty</h2>
          <p>
            We offer a limited warranty on repairs, depending on the service. Please ask our team for exact warranty terms during booking.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Cancellations</h2>
          <p>
            You may cancel a service up to 12 hours before the scheduled time without penalty. Last-minute cancellations may incur a fee.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. User Responsibilities</h2>
          <p>
            You must provide accurate information and a safe working environment for our technicians. Failure to do so may result in refusal of service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p>
            SK COOL Service is not liable for any indirect, incidental, or consequential damages arising from the use of our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
          <p>
            If you have any questions about these Terms & Conditions, feel free to reach out:
            <br />
            <strong>Phone:</strong> <a href="tel:+919990939208" className="text-blue-600 underline">+91 99909 39208</a><br />
            <strong>Address:</strong> Rajiv Colony, Gali No. 4, near KTM showroom.
          </p>
        </div>
      </section>
    </main>
  );
}
