import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function Contact() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="contact"
      className="relative flex justify-center items-center min-h-screen bg-black text-white px-4"
    >
      {/* 🔹 Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#38bdf8", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1 },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* 🔹 Contact Form */}
      <div className="w-full max-w-2xl  p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl text-[#BF092F] font-bold text-center mb-8">
          Contact <span className="text-white">Me</span>
          <div className="relative top-3 mx-auto w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-[3px] md:h-[4px] bg-white"></div>

        </h2>

        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          className="space-y-5"
        >
          <div>
            <label className="block mb-1 text-[#BF092F]">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="w-full p-3 rounded-md border-2 border-dotted  text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BF092F]"
            data-aos="fade-right"/>
          </div>

          <div>
            <label className="block mb-1 text-[#BF092F]">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="name@gmail.com"
              required
              className="w-full border-2 border-dotted  p-3 rounded-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BF092F]"
            data-aos="fade-left"/>
          </div>

          <div>
            <label className="block mb-1 text-[#BF092F]">Your Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="+880 58XX XXXXX"
              className="w-full p-3 rounded-md border-2 border-dotted  text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BF092F]"
            data-aos="fade-right"/>
          </div>

          <div>
            <label className="block mb-1 text-[#BF092F]">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Let us know how we can help you"
              className="w-full p-3 rounded-md border-2 border-dotted  text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BF092F]"
            data-aos="fade-left"/>
          </div>

          <div>
            <label className="block mb-1 text-[#BF092F]">Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Leave a comment..."
              className="w-full p-3 rounded-md border-2 border-dotted  text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#BF092F]"
            data-aos="fade-right"></textarea>
          </div>

          <button
            type="submit"
            className="w-40  bg-black text-[#BF092F] hover:bg-[#BF092F] hover:text-white border-2 border-dotted  font-semibold py-3 rounded-md transition duration-300"
          data-aos="fade-left">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
