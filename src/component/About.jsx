import React from "react";

const About = () => {
  return (
    <section className="bg-[#111] text-gray-200 py-16 px-6 flex flex-col items-center ">
      <div className="max-w-5xl w-full border-2 border-dotted text-[#BF092F] bg-[#1b1b1b] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/src/img/20251012_221615.png" // এখানে তোমার নিজের ছবি দিতে পারো
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 object-cover  border-dotted rounded-full border-4 border-[#BF092F]"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-[#BF092F] relative inline-block">
            About <span className="text-white">Me</span> 
            <span className="absolute top-10 left-0 w-22  h-[4px] bg-white"></span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi everyone! My name is <span className="font-semibold text-white">Bagas Rakha Putra</span>.
            I’m a web developer from Bogor, West Java. I have 1 year of experience in back-end web development.
            I really enjoy what I do right now — in my opinion, creating programs is not just a job,
            but also an art that has aesthetic value.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My job is to build your website to be functional and user-friendly yet still attractive.
            I provide a personal touch to your product and ensure that your website catches attention and is easy to use.
            My goal is to convey your message and identity in the most creative way possible.
            <span className="block mt-2">
              If you are interested in hiring me, please contact the listed contact.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
