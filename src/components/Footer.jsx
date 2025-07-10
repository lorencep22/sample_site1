import React from "react";

export default function Footer() {
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
      <footer className="bg-slate-900 text-slate-200 py-8 font-poppins">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 text-center md:text-left">
          {/* Logo & Name */}
          <div className="flex flex-col gap-2 mb-8 md:mb-0 items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block w-8 h-8 bg-gradient-to-tr from-gray-400 to-yellow-400 rounded-full"></span>
              <span className="text-lg font-bold text-yellow-400">
                Lorem Ipsum
              </span>
            </div>
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Lorem Ipsum.
            </div>
          </div>
          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <div className="font-semibold mb-2"> Contact</div>
            <div className="text-sm">Lorem 1, Ipsum, Dolor City</div>
            <div className="text-sm">Email: lorem@ipsum.com</div>
            <div className="text-sm">Phone: 0917-000-0000</div>
          </div>
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <div className="font-semibold mb-2"> Links</div>
            <ul className="space-y-1">
              <li>
                <a href="#hero" className="nav-underline hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-underline hover:text-yellow-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="nav-underline hover:text-yellow-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="nav-underline hover:text-yellow-400"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-underline hover:text-yellow-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-semibold mb-2"> Social</div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-underline hover:text-yellow-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-underline hover:text-yellow-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.8 8.001s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C16.2 5 12 5 12 5h-.1s-4.2 0-7.1.1c-.4.1-1.2.1-1.9.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.2 0 7.1-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.3V8.7l6.4 3.3-6.4 3.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
