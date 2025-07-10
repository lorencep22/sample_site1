import React from "react";

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Lorem A.",
    rating: 5
  },
  {
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Ipsum B.",
    rating: 5
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    name: "Dolor C.",
    rating: 4
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-white font-poppins">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Lorem Ipsum Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg shadow p-6 flex flex-col items-center text-center">
              <p className="text-lg italic text-slate-700 mb-4">“{t.quote}”</p>
              <div className="font-semibold text-slate-900 mb-2">{t.name}</div>
              <StarRating rating={t.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 