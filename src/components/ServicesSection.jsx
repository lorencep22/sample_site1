import React from "react";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    ),
    title: "Lorem Sinks",
    desc: "Lorem ipsum dolor sit amet, consectetur."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    ),
    title: "Lorem Cabinets",
    desc: "Pellentesque euismod nisi eu consectetur."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
    ),
    title: "Lorem Design",
    desc: "Nisi euismod euismod nisi nisi euismod."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8M8 12h8" /></svg>
    ),
    title: "Lorem Installation",
    desc: "Consectetur adipiscing elit lorem ipsum."
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Lorem Ipsum Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 