import React from "react";

const About = () => {
  return (
    <section className="bg-black text-gray-200 py-16 px-6 flex flex-col items-center ">
      <div className="max-w-5xl w-full border-2 border-dotted text-[#BF092F] bg-[#1b1b1b] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg ">
        
        {/* Profile Image */}
        <div className="flex-shrink-0"data-aos="fade-left">
          <img
            src="/src/img/20251012_221615.png" // এখানে তোমার নিজের ছবি দিতে পারো
            alt="Profile"
            className="w-48 h-48 md:w-56 md:h-56 object-cover  border-dotted rounded-full border-4 border-[#BF092F]"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4 text-[#BF092F] relative inline-block">
            About <span className="text-white">Me</span> 
            <span className="absolute top-10 left-0 w-22  h-[4px] bg-white"></span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I’m Abu Sayed — a passionate Frontend Developer and creative web designer.  
I love turning ideas into beautiful, responsive, and user-friendly websites.

My journey started with HTML & CSS, and now I’m learning JavaScript and exploring modern frontend frameworks.  
I enjoy building smooth UI/UX experiences, and I’m always curious to learn new tools and technologies that make the web more dynamic.



          </p>

          <p className="text-gray-300 leading-relaxed">
            When I’m not coding, I like exploring new design trends, learning about tech innovations, and creating content to inspire others to start coding.

My goal is simple — to grow as a full-stack developer and build digital experiences that make a difference. 🚀
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
