import TestimonialCard from "../src/components/TestimonialCard";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1500&q=80"
          alt="Sky background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-100 bg-opacity-70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">Build confidence. Get the job.</h1>
          <p className="text-lg md:text-2xl text-blue-800 mb-8 max-w-2xl">Mosu helps students gain real-world experience through virtual job simulations, so you can stand out to employers and land your dream role.</p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition text-lg"
          >
            Get Started &rarr;
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">What is Mosu?</h2>
          <p className="text-lg text-gray-700">Mosu offers virtual job simulations designed by top companies, giving students the opportunity to build skills, gain confidence, and showcase their abilities to future employers—all for free.</p>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Mosu gave me the confidence to apply for jobs I never thought I could get."
              author="Alex Johnson"
              role="Student, University of Sydney"
            />
            <TestimonialCard
              quote="The virtual experience was so real and practical. It helped me stand out in interviews!"
              author="Priya Patel"
              role="Student, NYU"
            />
            <TestimonialCard
              quote="I loved how easy it was to explore different career paths and build my skills."
              author="Michael Chen"
              role="Student, University of Toronto"
            />
          </div>
        </div>
      </section>

      {/* Enroll Section */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to Start Your Dream Career?</h2>
        <p className="text-lg mb-8">Join thousands of students building skills and confidence with Mosu.</p>
        <Link
          href="/signup"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition text-lg"
        >
          Enroll for Free
        </Link>
      </section>
    </>
  );
}
