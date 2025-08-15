import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  MessageCircle,
  User,
  Send,
} from "lucide-react";

export default function ContactFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            How we can help you?
          </h1>
          <p className="text-gray-600 text-lg">
            Get in touch with our educational team
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2 justify-center">
              Say hello! <span className="text-2xl">😊</span>
            </h2>
            <p className="text-gray-600 text-center">
              We're here to help and answer any question you might have. We look
              forward to hearing from you. If you need help, please contact us
              or meet to office with coffee.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Subject
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we help you?"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe about your inquiry or educational questions."
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col  justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-gray-600 max-w-md">
                  We are committed to protecting your privacy. We will never
                  collect information about you without your explicit consent.
                </p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Send message
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            {/* Welcome Message */}

            {/* Map and Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-48 mb-6 relative overflow-hidden">
                <iframe
                  title="GSR Educational Academy Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2072929112276!2d85.30956207541285!3d27.711495876179175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e053ad4f15%3A0xb34b9db8a5f6c3c2!2sGongabu%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1690964700000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    GSR Educational Academy
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">Gongabu</div>
                        <div className="text-gray-600 text-sm">Address</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">
                          +977 980-3016479
                        </div>
                        <div className="text-gray-600 text-sm">Mobile</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-gray-800">
                          gsreduacademy@gmail.com
                        </div>
                        <div className="text-gray-600 text-sm">Email</div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gray-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4" />
                  View on google map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
