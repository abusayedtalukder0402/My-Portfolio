
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='' >
      <div className="navbar bg-[#000000] shadow-sm fixed ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content text-[#BF092F] bg-[#000000] rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
       <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </div>
    <h1 className="btn btn-ghost text-xl text-[#BF092F] ml-100">ABU SAYED ( ) ;</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#BF092F] text-4">
      <li className=' hover:border-b-1 '><Link to="/">HOME</Link></li>
       <li  className=' hover:border-b-1 '><Link to="About">About</Link></li>
       <li  className=' hover:border-b-1 '><Link to="/Services">Services</Link></li>
       <li  className=' hover:border-b-1 '><Link to="Skills">Skills</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/Contact" className=" text-[#BF092F] text-2xl mr-100 font-bold">Contact</Link>
  </div>
</div>
</div>
  )
}

export default Navbar