import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaDownload } from 'react-icons/fa6';
import TextAnimation from '../TextAnimation/TextAnimation';
import { Element } from 'react-scroll';

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Element name='about'>
      <div className="pt-12 bg-white hero">
        <div className="flex flex-col-reverse items-center justify-between w-full gap-12 hero-content lg:flex-row">
          {/* Left: Text */}
          <div
            className="w-full"
            data-aos="zoom-in-down"
            data-aos-duration="1500"
          >
            <h1 className="text-3xl font-bold text-gray-800 lg:text-5xl">
              Hi, my name is Tapos Chandra
            </h1>

            <TextAnimation className="py-4" />

            <p className="pt-3 pb-6 text-lg text-gray-700">
              I want to take on the challenge of web development, where I can refine my skills and expand my knowledge.
              As an engineering student, I know how to handle complex situations effectively.
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Tsn9TPF32xwAGoMZeJCUedD1S2_jEVgb/view?usp=sharing"
            >
              <button className="flex items-center gap-2 px-6 py-2 text-lg font-semibold text-white transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90">
                <FaDownload /> Resume
              </button>
            </a>
          </div>

          {/* Right: Image */}
          <div
            className="w-full"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src="https://i.ibb.co/Rjwhd7b/removal-ai-8909ef5a-2611-4b3b-b3d2-86755d897f5a-tapos.png"
              alt="Tapos Chandra"
              className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Header;
