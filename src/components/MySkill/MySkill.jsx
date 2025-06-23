import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaNodeJs,
    FaGithub,
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiStripe,
} from 'react-icons/si';
import { Element } from 'react-scroll';

const MySkill = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const skills = [
        { icon: <FaHtml5 />, label: 'HTML5', color: 'text-orange-600' },
        { icon: <FaCss3Alt />, label: 'CSS3', color: 'text-blue-600' },
        { icon: <FaJsSquare />, label: 'JavaScript', color: 'text-yellow-400' },
        { icon: <FaReact />, label: 'React.js', color: 'text-cyan-500' },
        { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-sky-500' },
        { icon: <FaNodeJs />, label: 'Node.js', color: 'text-green-600' },
        { icon: <SiExpress />, label: 'Express.js', color: 'text-gray-700' },
        { icon: <SiMongodb />, label: 'MongoDB', color: 'text-green-500' },
        { icon: <SiFirebase />, label: 'Firebase', color: 'text-yellow-500' },
        { icon: <SiStripe />, label: 'Stripe', color: 'text-indigo-500' },
        { icon: <FaGithub />, label: 'GitHub', color: 'text-black' },
    ];

    return (
       <Element name='skill'>
         <section className="max-w-6xl px-6 py-20 mx-auto bg-white shadow-md rounded-3xl">
            <h1 className="mb-12 text-4xl font-bold text-center text-gray-800" data-aos="fade-up">
                My Skills
            </h1>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4" data-aos="fade-up">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-4 transition duration-300 shadow-sm bg-gray-50 hover:bg-gray-100 rounded-xl"
                    >
                        <div className={`text-5xl mb-2 ${skill.color}`}>{skill.icon}</div>
                        <p className="text-lg font-medium text-gray-700">{skill.label}</p>
                    </div>
                ))}
            </div>
        </section>
       </Element>
    );
};

export default MySkill;
