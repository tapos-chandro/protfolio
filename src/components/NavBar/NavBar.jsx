import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';



const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skill' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="z-50 w-full bg-white border shadow-md">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto ">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1f2a38]">
          <Link to="/" >Tapos</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden gap-8 font-medium text-gray-800 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} offset={-64}  smooth={true} duration={500} className="duration-200 hover:text-indigo-600 hover:cursor-pointer">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="px-6 pb-4 space-y-4 bg-white shadow md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                smooth={true} duration={500}
                offset={-64}
                className="duration-200 hover:text-indigo-600 hover:cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
