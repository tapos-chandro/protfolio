import 'aos/dist/aos.css';
import Aos from 'aos';

const MySkill = () => {
    Aos.init()
    return (
        <div className="mt-16">
            <div className="grid w-full gap-4 mt-10 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-semibold text-center my-9">My Skill</h1>
                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div>
                            <img src='https://i.ibb.co/DPBTb2m/images.jpg' className="w-full h-full" alt="" />
                        </div>
                        <div >
                            <img src='https://i.ibb.co/gvL1TQd/download.jpg' className="w-full h-full" alt="" />
                        </div>
                        <div >
                            <img src='https://i.ibb.co/K9K1c1K/images-2.jpg' className="w-full h-full" alt="" />
                        </div>
                        <div >
                            <img src='https://i.ibb.co/hVFk1zV/download-1.jpg' className="w-full h-full" alt="" />
                        </div>
                        <div >
                            <img src='https://i.ibb.co/sKN1JJr/expressjs.jpg' className="w-full h-full" alt="" />
                        </div>
                        <div >
                            <img src='https://i.postimg.cc/W47dCnn7/images-3.jpg' className="w-full h-full" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <h1 className="my-4 text-4xl font-semibold text-center">About</h1>
                        <p className="text-3xl text-center font-">Hello, I am Tapos Chandra. I have a diploma pass 2023 Computer Science and Technology from Tangail Polytechnic Institute. I want to be a successful Web Developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;