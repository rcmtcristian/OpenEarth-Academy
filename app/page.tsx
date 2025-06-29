// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">OpenEarth Academy</h1>
          <nav>
            <Link href="#donate"><a className="mr-4 hover:underline">Donate Now</a></Link>
            <Link href="#signup"><a className="bg-white text-green-600 py-2 px-4 rounded">Sign Up</a></Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 flex-grow">
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the OpenEarth Academy. Code for the Environment</h2>
          <p className="text-lg mb-8">Empower communities to fight climate change through code, data, and actionable projects.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#donate"><a className="bg-green-600 text-white py-3 px-6 rounded">Donate Now</a></Link>
            <Link href="#signup"><a className="border border-green-600 text-green-600 py-3 px-6 rounded">Sign Up</a></Link>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="container mx-auto py-16">
        <h3 className="text-3xl font-semibold text-center mb-12">Curriculum Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">Measure Climate Impact with GIS</h4>
            <p>Use GIS tools to analyze and visualize environmental data.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">Accelerate Reforestation</h4>
            <p>Develop algorithms to optimize planting strategies and track growth.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h4 className="text-xl font-bold mb-2">AI Models for Conservation</h4>
            <p>Build ML models to predict ecosystem changes and species migration.</p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Our Impact</h3>
          <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
            <div>
              <p className="text-5xl font-bold">15M+</p>
              <p>Acres Reforested</p>
            </div>
            <div>
              <p className="text-5xl font-bold">1B+</p>
              <p>Liters of Water Monitored</p>
            </div>
            <div>
              <p className="text-5xl font-bold">200+</p>
              <p>Indigenous Partner Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Fee */}
      <section className="container mx-auto py-16">
        <h3 className="text-3xl font-semibold text-center mb-8">What does $50 a month cover?</h3>
        <ul className="space-y-4 list-disc list-inside max-w-xl mx-auto">
          <li>Remote volunteering opportunities with global teams</li>
          <li>Hands-on local events to plant and protect ecosystems</li>
          <li>Funding free software & hardware for environmental groups</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Air Pollution Mitigation</h4>
              <p>Raised $10.11M of a $23M goal to reduce urban pollutants via citizen science.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Mangrove Restoration</h4>
              <p>Planted over 2M mangrove saplings in coastal regions to prevent erosion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="signup" className="container mx-auto py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">Sign Up For Environment News & Alerts</h3>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="border p-3 rounded flex-1"
          />
          <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white p-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p>MakeWebBetter</p>
            <p>123 Greenway Blvd, Suite 100</p>
            <p>+1 (800) 555-1234</p>
            <p>support@openearth.org</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Links</h5>
            <Link href="/privacy"><a className="hover:underline">Privacy Policy</a></Link><br />
            <Link href="/terms"><a className="hover:underline">Terms of Use</a></Link>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/openearth"><a aria-label="Facebook"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></a></Link>
              <Link href="https://instagram.com/openearth"><a aria-label="Instagram"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></a></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
