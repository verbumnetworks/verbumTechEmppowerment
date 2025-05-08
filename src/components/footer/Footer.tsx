import DonateButton from '@/components/button/DonateButton';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className="bg-[#0C1A2B] text-gray-300 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div>
        <h2 className="text-white text-lg font-bold mb-2">Akcel</h2>
        <p className="text-sm mb-4">
          Akcel is a Crowdfunding & Charity Website by Peterdraw. Learn about our story, mission, customer adoption, etc.
        </p>
        <div className="flex gap-4 mt-2">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Akcel</h3>
        <ul className="space-y-2 text-sm">
          <li>Why Akcel</li>
          <li>Enterprise</li>
          <li>Customer Story</li>
          <li>Security</li>
          <li>Pricing</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Resources</h3>
        <ul className="space-y-2 text-sm">
          <li>Download</li>
          <li>Help Center</li>
          <li>Events</li>
          <li>Guides</li>
          <li>Partner</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Company</h3>
        <ul className="space-y-2 text-sm">
          <li>About us</li>
          <li>Contact</li>
          <li>Products</li>
          <li>Sign Up</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-3">Get in Touch with Us</h3>
        <ul className="space-y-2 text-sm">
          <li>829 Thompson Drive, San Francisco</li>
          <li>CA 94107, United States</li>
          <li>+1 390 098 2132</li>
          <li>support@akcel.com</li>
        </ul>
        <div className="mt-4">
          <DonateButton link="https://yourdonationlink.com" className="bg-orange-500 hover:bg-orange-600" text="Donate Now" />
        </div>
      </div>
    </div>

    <div className="text-center text-sm text-gray-500 mt-12">
      Akcel Crowdfunding & Charity Website — © 2025 by Peterdraw
    </div>
  </footer>  )
}
