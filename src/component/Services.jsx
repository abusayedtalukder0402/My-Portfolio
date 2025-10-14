import { FaCogs, FaStar, FaLaptopCode, FaRocket, FaEye, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCogs size={40} className="text-[#BF092F]" />,
      title: "Frontend Web Development",
      desc: "“I build modern, responsive, and interactive websites that look great on every device.”"
    },
    {
      icon: <FaStar size={40} className="text-[#BF092F]" />,
      title: "Portfolio Website Design",
      desc: "“I design and develop personal portfolio websites that highlight skills, work, and creativity.”"
    },
    {
      icon: <FaLaptopCode size={40} className="text-[#BF092F]" />,
      title: "Landing Page Design",
      desc: "“I create clean and conversion-focused landing pages for brands and startups.”."
    },
    {
      icon: <FaRocket size={40} className="text-[#BF092F]" />,
      title: "UI/UX Design (with Tailwind & Figma concepts)",
      desc: "“I design user-friendly interfaces that enhance the overall experience and usability.”"
    },
    {
      icon: <FaEye size={40} className="text-[#BF092F]" />,
      title: "Website Redesign / Optimization",
      desc: "“I improve old or slow websites with modern design and optimized performance.”"
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#BF092F]" />,
      title: "Creative Animations & Effects",
      desc: "“I add smooth animations and micro-interactions to make websites come alive.”"
    }
  ];

  return (
    <section className="py-16 bg-black text-[#BF092F]" id="services" data-aos="fade-right">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-left border-l-4 border-white pl-3">
          Services
        </h2>
         </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 "data-aos="fade-up">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-black border-4 border-double shadow-md hover:shadow-lg rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
          >
            <div>{service.icon}</div>
            <div>
              <h3 className="font-bold text-lg mb-1">{service.title}</h3>
              <p className="text-sm text-white">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
