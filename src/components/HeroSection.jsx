import React from "react";

export default function HeroSection() {
  return (
    <>
      <style>{`
        .nav-underline {
          position: relative;
        }
        .nav-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: #fff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
      <section
        id="hero"
        className="relative min-h-[70vh] flex items-center justify-center bg-slate-900 font-montserrat"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
          alt="Stainless Steel Fabrication"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-2 sm:px-4 py-12 sm:py-24 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-yellow-400 font-semibold mb-8 tracking-wide">
            Sed do eiusmod tempor incididunt ut labore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <a
              href="#portfolio"
              className="nav-underline w-full sm:w-auto px-6 py-3 rounded bg-yellow-400 text-slate-900 font-bold shadow hover:bg-slate-900 hover:text-yellow-400 hover:border hover:border-yellow-400 transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="nav-underline w-full sm:w-auto px-6 py-3 rounded bg-slate-900 border border-yellow-400 text-yellow-400 font-bold shadow hover:bg-yellow-400 hover:text-slate-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </section>
    </>
  );
}
