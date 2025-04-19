'use client';

import LockIcon from '@mui/icons-material/Lock';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <LockIcon className="text-4xl" />
            <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg max-w-2xl">
            Your privacy is important to us. Here&apos;s how we handle your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-12 max-w-5xl mx-auto space-y-8 text-base leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect your name, phone number, address, email, and service details when you contact or book services through our site or via phone.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <p>
            Your data is used to deliver and improve our services. We may contact you for confirmations, updates, promotions, or follow-ups regarding your service experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Data Sharing</h2>
          <p>
            We do not sell or rent your personal data. Your information may be shared with our trusted technicians or partners only as necessary to fulfill services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or loss.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
          <p>
            Our website may use cookies to enhance user experience, analyze traffic, and support functionality. You can control cookies through your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
          <p>
            We may use third-party services like analytics or email platforms. These services may collect limited data as per their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <p>
            You may request to view, update, or delete your personal data by contacting us. We will process your request in accordance with applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. All changes will be posted on this page with a revised date.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
          <p>
            If you have any questions about this policy, feel free to contact us:
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+919990939208" className="text-blue-600 underline">
              +91 99909 39208
            </a>
            <br />
            <strong>Address:</strong> Rajiv Colony, Gali No. 4, near KTM showroom.
          </p>
        </div>
      </section>
    </main>
  );
}
