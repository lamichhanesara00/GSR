import React from "react";

export default function CoursesDetails() {
  const courses = [
    {
      id: 1,
      title: "Korean Language Fundamentals",
      image: "/Korean.jpg",
      description:
        "This course provides a comprehensive introduction to the Korean language, starting from the basics of Hangul (the Korean alphabet) and progressing through essential vocabulary, grammar, and sentence structure. You will also gain an understanding of Korean culture, traditions, and everyday expressions, enabling you to communicate confidently in both personal and professional settings."
    },
    
    {
      id: 2,
      title: "IELTS Preparation",
      image: "/IELTS.jpg",
      description:
        "Our IELTS Preparation course is designed to help you achieve your target band score through intensive training in all four skills: Listening, Reading, Writing, and Speaking. You will learn test-taking strategies, complete timed practice exams, and receive personalized feedback to strengthen your weaknesses and boost your overall performance."
    },
    {
      id: 3,
      title: "PTE Preparation",
      image: "/PTE.jpg",
      description:
        "The PTE Preparation course focuses on mastering each section of the Pearson Test of English Academic. With interactive lessons, computer-based practice tests, and targeted feedback, you will build confidence in speaking, writing, listening, and reading while learning proven strategies to maximize your score."
    },
    {
      id: 4,
      title: "Chinese Preparation",
      image: "/Chinese .jpg",
      description:
        "Learn Mandarin Chinese from the ground up, starting with pronunciation and tones, moving through essential grammar, and expanding your vocabulary for everyday situations. Cultural insights are integrated throughout the course to help you communicate naturally and understand the customs of Chinese-speaking communities."
    },
    {
      id: 5,
      title: "Japanese Language Preparation",
      image: "/Japanese.jpg",
      description:
        "This Japanese Language Preparation course guides you through the fundamentals of Hiragana, Katakana, and Kanji, while building your conversational skills for daily life and travel. You will also explore Japanese traditions, etiquette, and modern culture to deepen your understanding of the language in context."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-yellow-50/40 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Premium Language Education
          </div>
          <h1 className="text-5xl font-bold text-blue-900 mb-4 drop-shadow-sm">
            All Language Courses
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Courses */}
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 p-8 border border-gray-100 hover:border-blue-200"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-yellow-100/50 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className="relative group/image">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="relative w-[380px] h-[280px] object-cover rounded-xl shadow-xl transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-xl transform -translate-x-full group-hover:translate-x-0"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 delay-300"></div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Course {String(course.id).padStart(2, "0")}
                  </div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {course.title}
                  </h2>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-2"></div>
                  <p className="relative text-blue-700 text-lg leading-relaxed">
                    {course.description}
                  </p>
                </div>
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group/btn">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-400/30 via-yellow-400/30 to-blue-400/30 bg-clip-border animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating background elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-20 right-10 w-16 h-16 bg-yellow-200/20 rounded-full animate-bounce pointer-events-none"></div>
      <div className="fixed top-1/2 right-20 w-12 h-12 bg-blue-300/20 rounded-full animate-pulse pointer-events-none"></div>
    </div>
  );
}
