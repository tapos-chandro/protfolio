import miniMission from '../../../src/assets/mini-mission-2.png';
import Blog from '../../../src/assets/blog-2.png';
import crowdfund from '../../../src/assets/crodfound-2.png';
import { Element } from 'react-scroll';

const projects = [
  {
    id: 1,
    title: 'Mini Missions',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Firebase', 'Stripe',"sweetalert2", "swiper","react-hook-form","axios","react-icons","react-route", "react-helmet"],
    imgSrc: miniMission,
    aos: 'fade-up',
    liveLink: 'https://mini-missions.netlify.app/',
    clientLink: 'https://github.com/tapos-chandro/mini-missions-client',
    serverLink: 'https://github.com/tapos-chandro/mini-missions-server',
  },
  {
    id: 2,
    title: 'Blog Website',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Axios', 'Chakra UI', 'React Icons', 'Moment.js', 'SweetAlert2', 'React Helmet', 'React Router DOM'],
    imgSrc: Blog,
    aos: 'flip-left',
    liveLink: 'https://blog-wibsite.netlify.app/',
    clientLink: 'https://github.com/tapos-chandro/blog-website-client',
    serverLink: 'https://github.com/tapos-chandro/blog-website-server',
  },
  {
    id: 3,
    title: 'Crowd Fund',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js',
      "Firebase Authentication",
      "React Router",
      "Tailwind CSS",
      "React Toastify"],
    imgSrc: crowdfund,
    aos: 'fade-up',
    liveLink: 'https://helpful-mooncake-cfc5b8.netlify.app/',
    clientLink: 'https://github.com/tapos-chandro/Crowd-Funding-Client',
    serverLink: 'https://github.com/tapos-chandro/Crowd-Funding-Server',
  },
];

const MyProjects = () => {
  return (

    <Element name='projects'>
      <div className="pt-20 mx-auto lg:px-6 max-w-7xl">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-14">My Projects</h1>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, title, technologies, imgSrc, aos, liveLink, clientLink, serverLink }) => (
            <div
              key={id}
              className="overflow-hidden bg-white shadow-xl card rounded-2xl"
              data-aos={aos}
              data-aos-anchor-placement="top-bottom"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              {/* Project image with zoom on hover */}
              <div className="overflow-hidden cursor-pointer max-h-52 rounded-t-2xl">
                <img
                  src={imgSrc}
                  alt={title}
                  className="w-full h-full transition-transform duration-700 transform hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

                {/* Tech stack with gradient badges */}
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap justify-around gap-2 pt-3">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 font-semibold text-indigo-700 transition border border-indigo-300 rounded-full hover:bg-indigo-100"
                  >
                    Live Site
                  </a>
                  <a
                    href={clientLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 font-semibold text-green-700 transition border border-green-300 rounded-full hover:bg-green-100"
                  >
                    Client Code
                  </a>
                  <a
                    href={serverLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 font-semibold text-blue-700 transition border border-blue-300 rounded-full hover:bg-blue-100"
                  >
                    Server Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyProjects;
