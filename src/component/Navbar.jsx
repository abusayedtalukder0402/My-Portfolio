import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Link ইমপোর্ট করো
import { Home, User, Lightbulb, Wrench, Phone, Menu, X } from 'lucide-react';

// মেনুর আইটেম ডেটা
const navItems = [
  { name: 'Home', icon: Home, link: '/' },
  { name: 'About', icon: User, link: '/about' },
  { name: 'Services', icon: Lightbulb, link: '/services' },
  { name: 'Skills', icon: Wrench, link: '/skills' },
  { name: 'Contact Us', icon: Phone, link: '/contact' },
];

// ন্যাভিগেশন লিঙ্ক কম্পোনেন্ট
const NavLink = ({ item, onClick }) => {
  const IconComponent = item.icon;
  return (
    <Link
      to={item.link}
      className="flex items-center p-3 md:p-2 text-[#BF092F] hover:bg-black md:hover:bg-transparent md:hover:text-white transition-colors duration-200"
      onClick={onClick}
    >
      {/* শুধু মোবাইলে আইকন দেখা যাবে */}
      <IconComponent className="w-5 h-5 mr-3 text-[#BF092F] md:hidden" />
      {/* শুধু টেক্সট */}
      <span className="text-base font-medium">{item.name}</span>
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* লোগো */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-extrabold text-[#BF092F] cursor-pointer">
            ABU SAYED ();
          </h1>
        </div>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex md:items-center space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} onClick={handleLinkClick} />
          ))}
        </div>

        {/* মোবাইল টগল বাটন */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#BF092F] p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* মোবাইল সাইডবার */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-black shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } z-40`}
      >
        {/* সাইডবার হেডার */}
        <div className="p-6 text-center border-b border-gray-700">
          <img
            src="/src/img/20251012_221615.png"
            alt="ABU SAYED"
            className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#BF092F]"
          />
          <h2 className="mt-3 text-xl font-semibold text-white">ABU SAYED ();</h2>
        </div>

        {/* ন্যাভ লিঙ্ক */}
        <nav className="mt-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink item={item} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ব্যাকগ্রাউন্ড ওভারলে */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
