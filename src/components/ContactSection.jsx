import React from "react";

export default function ContactSection() {
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
      <section id="contact" className="py-12 sm:py-16 bg-white font-poppins">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Contact Us
            </h2>
            <form className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Lorem Name"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Lorem Email"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                placeholder="Lorem Phone"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Lorem Message"
                rows="4"
                className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-slate-900 font-bold rounded hover:bg-yellow-300 transition"
              >
                Send
              </button>
            </form>
            <div className="mt-8 space-y-2 text-slate-700">
              <div>
                <span className="font-semibold">Lorem Hours:</span> Lorem-Sat
                8:00am - 6:00pm
              </div>
              <div>
                <span className="font-semibold">Lorem Address:</span> Lorem 1,
                Ipsum, Dolor City
              </div>
              <div>
                <a
                  href="https://m.me/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-underline text-blue-600 hover:underline"
                >
                  Messenger
                </a>
              </div>
            </div>
          </div>
          {/* Google Map */}
          <div className="flex flex-col gap-4 mt-8 md:mt-12">
            <iframe
              title="Lorem Ipsum Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.123456789!2d124.631897!3d8.482222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjgnNTIuMCJOIDEyNMKwMzcnNTUuMCJF!5e0!3m2!1sen!2sph!4v1680000000000!5m2!1sen!2sph"
              width="100%"
              height="260"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-2 border-slate-200 shadow"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
