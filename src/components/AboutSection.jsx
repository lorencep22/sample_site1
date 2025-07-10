import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-slate-100 font-poppins">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-2 sm:px-4">
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Lorem Ipsum Dolor Sit Amet
          </h2>
          <p className="text-slate-700 text-base sm:text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
            consectetur nisi, euismod euismod nisi nisi euismod.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80"
            alt="Our Team"
            className="rounded-lg shadow-lg w-full max-w-xs object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
