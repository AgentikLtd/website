import React from 'react';
import { ScrollText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <ScrollText className="w-12 h-12 text-[#3c7dc3]" />
        </div>
        <h1 className="text-3xl font-bold text-white text-center mb-8">Terms & Conditions</h1>
        
        <div className="bg-[#1a1a1c] rounded-2xl p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Services</h2>
            <p>
              Agentik Limited provides consulting and implementation services for Genesys Cloud CX and related technologies. Our services are subject to change or termination without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by Agentik Limited and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
            <p>
              Agentik Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Scotland, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}