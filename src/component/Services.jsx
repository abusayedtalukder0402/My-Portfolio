import { FaCogs, FaStar, FaLaptopCode, FaRocket, FaEye, FaCheckCircle } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCogs size={40} className="text-[#BF092F]" />,
      title: "Awesome Features",
      desc: "Aliquam commodo arcu vel ante volutpat tempus. Praesent pulvinar velit at posuere mollis. Quisque libero sapien."
    },
    {
      icon: <FaStar size={40} className="text-[#BF092F]" />,
      title: "Animated Elements",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus cursus lectus vel pellentesque."
    },
    {
      icon: <FaLaptopCode size={40} className="text-[#BF092F]" />,
      title: "Responsive Design",
      desc: "Pellentesque ultrices ligula a libero porta, ut venenatis orci molestie. Vivamus vitae aliquet tellus, sed mollis libero."
    },
    {
      icon: <FaRocket size={40} className="text-[#BF092F]" />,
      title: "Modern Design",
      desc: "Duis ut ultricies nisi. Nulla risus odio, cursus convallis justo vitae purus malesuada, cursus convallis justo."
    },
    {
      icon: <FaEye size={40} className="text-[#BF092F]" />,
      title: "Retina Ready",
      desc: "Vivamus quis tempor purus, a eleifend purus. Ut sodales vel tellus vel vulputate. Fusce rhoncus semper magna."
    },
    {
      icon: <FaCheckCircle size={40} className="text-[#BF092F]" />,
      title: "Fast Support",
      desc: "Suspendisse convallis sem eu ligula porta gravida. Suspendisse potenti. Lorem ipsum dolor sit amet."
    }
  ];

  return (
    <section className="py-16 bg-black text-[#BF092F]" id="services">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-left border-l-4 border-white pl-3">
          Services
        </h2>
         </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
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
