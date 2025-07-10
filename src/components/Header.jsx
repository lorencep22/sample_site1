import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Why Choose Us", href: "#whychooseus" },
  { label: "Contact", href: "#contact" },
];

function handleSmoothScroll(e, href, closeMenu) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  if (closeMenu) closeMenu();
}

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navLinks.map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });
      const visible = offsets.filter((o) => {
        const el = document.getElementById(o.id);
        return el && el.getBoundingClientRect().top <= window.innerHeight * 0.3;
      });
      if (visible.length > 0) {
        const closest = visible.reduce((a, b) => (a.top < b.top ? a : b));
        setActiveSection(closest.id);
      } else {
        setActiveSection(offsets[0].id);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
        .nav-underline:hover::after,
        .nav-underline.active::after {
          transform: scaleX(1);
        }
      `}</style>
      <header className="bg-slate-900/90 border-b border-slate-800 font-poppins static md:sticky md:top-0 md:z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 bg-gradient-to-tr from-gray-400 to-yellow-400 rounded-full mr-2"></span>
            <span className="text-xl font-bold text-yellow-400 tracking-tight">
              Lorem Ipsum
            </span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={
                    "nav-underline text-gray-100 transition-colors duration-200 font-medium hover:text-yellow-400 " +
                    (isActive ? "active text-yellow-400" : "")
                  }
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          {/* Hamburger for mobile/tablet */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 rounded"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5 rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
          </button>
        </div>
        {/* Mobile nav overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="w-10 h-10 flex items-center justify-center text-white text-3xl font-bold focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 mt-8">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.href, () => setMenuOpen(false))
                    }
                    className={
                      "nav-underline text-white text-2xl font-semibold transition-colors duration-200 hover:text-yellow-400 " +
                      (isActive ? "active text-yellow-400" : "")
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
