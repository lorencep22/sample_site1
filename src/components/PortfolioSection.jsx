import React, { useState } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    name: "Modern Kitchen Island",
    description:
      "A custom stainless steel kitchen island with integrated sink and storage.",
    location: "Cagayan de Oro City",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    name: "Restaurant Countertop",
    description:
      "Durable and stylish stainless steel countertop for a local restaurant.",
    location: "Divisoria, CDO",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    name: "Outdoor BBQ Setup",
    description:
      "Weather-resistant BBQ and prep area for outdoor entertaining.",
    location: "Uptown, CDO",
  },
  {
    url: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=600&q=80",
    name: "Commercial Sink Installation",
    description: "Large custom sink for a commercial kitchen.",
    location: "Cogon Market, CDO",
  },
  {
    url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80",
    name: "Minimalist Home Kitchen",
    description:
      "Sleek stainless steel counters and cabinets for a minimalist home.",
    location: "Nazareth, CDO",
  },
  {
    url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    name: "Bakery Work Table",
    description: "Spacious work table for a bakery's daily production.",
    location: "Lapasan, CDO",
  },
];

export default function PortfolioSection() {
  const [modalImg, setModalImg] = useState(null);

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
      <section id="portfolio" className="py-16 bg-slate-100 font-montserrat">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <button
                key={idx}
                className="focus:outline-none"
                onClick={() => setModalImg(img)}
              >
                <img
                  src={img.url}
                  alt={img.name}
                  className="rounded-lg shadow-md w-full h-56 object-cover hover:scale-105 transition-transform"
                />
              </button>
            ))}
          </div>
          {modalImg && (
            <div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={() => setModalImg(null)}
            >
              <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative flex flex-col items-center">
                <img
                  src={modalImg.url}
                  alt={modalImg.name}
                  className="rounded-lg mb-4 max-h-64 w-full object-cover"
                />
                <h3 className="text-2xl font-bold mb-2 text-slate-900">
                  {modalImg.name}
                </h3>
                <p className="text-slate-700 mb-2 text-center">
                  {modalImg.description}
                </p>
                <div className="text-slate-500 text-sm mb-4">
                  Location: {modalImg.location}
                </div>
                <button
                  className="absolute top-4 right-4 text-slate-900 text-3xl font-bold nav-underline"
                  onClick={() => setModalImg(null)}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
