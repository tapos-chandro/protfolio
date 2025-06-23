import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.facebook.com/taposKumar24"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-blue-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/home?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-sky-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/tapos-chandro/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/tapos555/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/tapos-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:text-gray-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-semibold text-white">Tapos Chandra</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
