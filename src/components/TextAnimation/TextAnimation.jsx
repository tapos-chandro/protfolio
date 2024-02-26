import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
            <div className="flex items-center gap-2 pt-6">
                <h1 className="lg:text-4xl font-semibold">I am a</h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Javascript Developer.',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'React Developer.',
                        1000,
                        'MERN Stack Developer.',
                        1000,
                        'ExpressJs Developer.',
                        1000,
                        'Font-End Developer.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    // style={{ fontSize: '2em', display: 'inline-block' }}
                    className="text-[red] lg:text-4xl font-bold"
                    repeat={Infinity}
                />
            </div>
    );
};

export default TextAnimation;