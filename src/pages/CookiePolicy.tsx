import React from 'react';
import { Cookie } from 'lucide-react';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <Cookie className="w-12 h-12 text-[#3c7dc3]" />
        </div>
        <h1 className="text-3xl font-bold text-white text-center mb-8">Cookie Policy</h1>
        
        <div className="bg-[#1a1a1c] rounded-2xl p-8 space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make the site work better for you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies for site functionality</li>
              <li>Analytics cookies to understand site usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for targeted advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-white mb-2">Essential Cookies</h3>
                <p>Required for basic site functionality and security.</p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">Preference Cookies</h3>
                <p>Remember your settings and preferences.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
            </p>
            <p>
              To modify your cookie settings, please visit your browser's settings page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at privacy@agentik.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}