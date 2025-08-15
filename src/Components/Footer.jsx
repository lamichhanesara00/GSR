import React from "react";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { BsWhatsapp, BsTiktok } from "react-icons/bs";

export default function Footer() {
  const phoneNumber = "+977 980-3016479";
  const email = "gsreduacademy@gmail.com";
  const location = "Gongabu, Kathmandu, Nepal";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Phone number ${phoneNumber} copied to clipboard!`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <footer className="relative mt-12 text-white" style={{ backgroundColor: "#002452" }}>
      {/* Top Banner */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[80vw] md:w-[70vw] rounded-4xl bg-yellow-400 p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="font-semibold text-gray-900 text-lg">
            Admission is open for the next year batch
          </div>
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition flex items-center gap-2"
          >
            Get started now
          </Link>
        </div>
        <div className="font-semibold text-gray-900 mt-2 md:mt-0">
          📞 {phoneNumber}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-40 md:pt-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <img src="/logo4.png" alt="GSR Logo" className="rounded-2xl mb-4" />
            <p className="text-gray-300 mb-4">
              GSR Educational Academy provides high-quality education and guidance for students in Kathmandu, Nepal. We are committed to excellence in learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-yellow-400">Our Courses</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-400">Our Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <div className="space-y-4">
              <div>
                <span className="text-gray-400 text-sm">Call us directly?</span>
                <button
                  onClick={copyToClipboard}
                  className="block text-white font-semibold hover:text-yellow-400 transition-colors"
                >
                  {phoneNumber}
                </button>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Need support?</span>
                <a
                  href={`mailto:${email}`}
                  className="block text-white font-semibold hover:text-yellow-400"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Service Area</span>
                <div className="text-white font-semibold">Kathmandu, Nepal</div>
              </div>
            </div>
          </div>

          {/* Location & Social */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <div className="text-gray-400 text-sm mb-1">📍 Location</div>
              <div className="text-white font-semibold">{location}</div>
            </div>

            {/* Google Map */}
            <div className="mb-4 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9734686121567!2d85.3215164!3d27.7290345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19885c21b3ff%3A0xf08a2b6d5a9b3e3e!2sGongabu%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1692100000000!5m2!1sen!2sus"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Gongabu Location"
              ></iframe>
            </div>

            <h3 className="pb-4">Follow Us on:</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110">
                <Facebook />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110">
                <BsWhatsapp />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-400/20 rounded flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition-transform transform hover:scale-110">
                <BsTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 pb-4">
            <div>
              © 2025 GSR Educational Academy. Proudly serving students in Kathmandu, Nepal.
            </div>
            <div className="flex items-center gap-4">
              <Link to="#"><div>Privacy Policy</div></Link>
              <Link to="#"><div>Terms of Services</div></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
