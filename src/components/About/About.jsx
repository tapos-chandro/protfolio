import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Element } from 'react-scroll';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <Element name='about'>
            <div className="max-w-6xl px-6 py-20 mx-auto">
                <h2
                    className="mb-12 text-4xl font-bold text-center text-gray-800"
                    data-aos="fade-up"
                >
                    About Me
                </h2>

                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Image */}
                    <div data-aos="fade-right">
                        <img
                            src="https://i.ibb.co/Rjwhd7b/removal-ai-8909ef5a-2611-4b3b-b3d2-86755d897f5a-tapos.png"
                            alt="Tapos Chandra"
                            className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-left" className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-700">
                            I’m Tapos Chandra — a Passionate MERN Stack Developer
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-600">
                            I specialize in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. My goal is to craft efficient, scalable, and visually engaging web solutions.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            I am a Computer Science graduate and always eager to learn and grow. With hands-on project experience, I’ve developed systems like Mini Missions and Blog Platforms, focusing on real-world usability.
                        </p>

                        {/* Skills */}
                        <div>
                            <h4 className="mb-2 text-xl font-bold text-gray-700">Core Skills:</h4>
                            <ul className="flex flex-wrap gap-3">
                                {[
                                    'HTML',
                                    'CSS',
                                    'Tailwind',
                                    'JavaScript',
                                    'React.js',
                                    'Node.js',
                                    'Express.js',
                                    'MongoDB',
                                    'Firebase',
                                    'Stripe',
                                ].map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </ul>
                        </div>

                        <p className="pt-4 text-lg text-gray-700">
                            I’m currently seeking a position where I can contribute to exciting projects, learn from experienced teams, and continue growing as a full-stack developer.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default About;
