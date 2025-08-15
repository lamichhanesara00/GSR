import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What are the requirements to study in Japan?",
    answer:
      "To study in Japan, students typically need a valid passport, acceptance letter from a recognized Japanese institution, proof of sufficient funds to cover tuition and living expenses, a completed visa application, and other documents requested by the Japanese embassy or consulate. Some programs may also require language proficiency in Japanese or English depending on the course medium.",
  },
  {
    question: "How do I apply for a Japanese student visa?",
    answer:
      "After receiving an acceptance letter from a university or language school in Japan, you must submit your visa application to the nearest Japanese embassy or consulate. Required documents often include your passport, acceptance letter, Certificate of Eligibility (issued by the school), financial proof, and completed application forms. Processing usually takes a few weeks, so apply well in advance.",
  },
  {
    question: "Are there scholarships available for international students?",
    answer:
      "Yes, Japan offers multiple scholarships for international students. Some popular options include the MEXT Scholarship, JASSO Scholarships, and university-specific scholarships. These can cover tuition, living expenses, or both. Eligibility often depends on academic merit, financial need, or field of study. Applying early and preparing a strong application increases your chances.",
  },
  {
    question: "Can I work while studying in Japan?",
    answer:
      "International students in Japan can work part-time, up to 28 hours per week during academic terms and full-time during vacations, provided they obtain a 'Permission to Engage in Activity Other Than That Permitted under the Status of Residence Previously Granted'. This allows students to support themselves financially, but priority should remain on studies.",
  },
  {
    question: "What is the cost of living in Japan?",
    answer:
      "Living costs in Japan vary by city. Tokyo and Osaka are more expensive, while rural areas are cheaper. On average, students spend ¥100,000–¥150,000 per month on rent, food, transportation, utilities, and personal expenses. Shared housing and cooking at home can help reduce costs. It's important to budget carefully and have extra funds for emergencies.",
  },
  {
    question: "Do I need to know Japanese before applying?",
    answer:
      "It depends on your program. Many universities offer courses in English, but learning Japanese is highly recommended for daily life, part-time work, and cultural integration. Basic Japanese skills can improve your experience and make everyday tasks like shopping, transportation, and interacting with locals much easier.",
  },
  {
    question: "How do I choose the right university in Japan?",
    answer:
      "Choosing a university requires considering factors such as location, courses offered, language of instruction, tuition fees, campus facilities, and student support services. Research rankings, speak with alumni or current students, and consult with educational advisors to make an informed decision.",
  },
  {
    question: "What documents are needed for university applications?",
    answer:
      "Typically, you will need academic transcripts, diplomas, recommendation letters, a statement of purpose, a valid passport, language proficiency test scores, and sometimes a research proposal for postgraduate courses. Each university may have its own specific requirements, so always check their official guidelines.",
  },
  {
    question: "How long does it take to process my visa?",
    answer:
      "Visa processing usually takes between 2 to 6 weeks depending on the embassy and completeness of your documents. Some embassies may require additional verification or interviews. Apply early to ensure you receive your visa in time for your program's start date.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Frequently Asked Question{" "}
            <span style={{ color: "#002452" }}>(FAQ)</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about studying in Japan
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "shadow-xl border-blue-200"
                    : isHovered
                    ? "shadow-lg border-gray-200"
                    : "shadow-sm border-gray-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-8 py-6 text-left transition-all duration-300 ${
                    isActive || isHovered ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-lg font-semibold pr-4 transition-colors duration-300 ${
                      isActive ? "text-blue-600" : "hover:text-blue-600"
                    }`}
                    style={{
                      color: isActive
                        ? "#002452"
                        : isHovered
                        ? "#002452"
                        : "#1f2937",
                    }}
                  >
                    {faq.question}
                  </span>

                  <div className="flex-shrink-0 ml-4">
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-100"
                          : isHovered
                          ? "bg-gray-200"
                          : "bg-gray-100"
                      }`}
                    >
                      {isActive ? (
                        <Minus
                          className="w-5 h-5 transition-transform duration-300"
                          style={{ color: "#002452" }}
                        />
                      ) : (
                        <Plus
                          className="w-5 h-5 transition-transform duration-300"
                          style={{ color: isHovered ? "#002452" : "#6b7280" }}
                        />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div
                      className="w-12 h-0.5 mb-6 transition-all duration-300"
                      style={{ backgroundColor: "#002452" }}
                    />
                    <p className="text-gray-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            Still have questions?
            <Link to="/contact">
              <button
                className="ml-2 font-semibold transition-colors duration-300"
                style={{ color: "#002452" }}
              >
                Contact us
              </button>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
