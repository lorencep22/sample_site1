import React from "react";

const reasons = [
  {
    title: "Lorem Team",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    title: "Lorem Steel",
    desc: "Sed do eiusmod tempor incididunt ut labore.",
  },
  { title: "Lorem Pricing", desc: "Ut enim ad minim veniam, quis nostrud." },
];

export default function WhyChooseUsSection() {
  return (
    <section id="whychooseus" className="py-16 bg-slate-900 font-poppins">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Lorem Ipsum Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-lg shadow p-6 text-white flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {reason.title}
              </h3>
              <p className="text-slate-200">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
