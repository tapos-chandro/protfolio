import TextAnimation from '../TextAnimation/TextAnimation'
import { FaDownload } from "react-icons/fa6";
import pdf from "../../assets/Tapos Chandro.pdf"

import 'aos/dist/aos.css';
import Aos from 'aos';

const Header = () => {
  Aos.init()
  return (
    <div className='py-10 hero'>
      <div className='flex-col justify-between w-full hero-content lg:flex-row-reverse' >
        <div className='h-full'  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
>
        <img
          src='https://i.ibb.co/Rjwhd7b/removal-ai-8909ef5a-2611-4b3b-b3d2-86755d897f5a-tapos.png'
          className='w-full h-full rounded-lg shadow-2xl ' 
        />
        </div>
        <div className='w-full' data-aos="zoom-in-down" data-aos-duration="4000">
          <h1 className='text-2xl font-bold lg:text-5xl' >Hi, my name is Tapos Chandro</h1>
          <TextAnimation className="py-4"></TextAnimation>
          <p className='pt-3 pb-6 text-lg'>I want to take on the challenge of web development. Where I can refine my skill and expand my knowledge. As an engineering student, I know how to handle situations during complicated times.</p>

          <a href={pdf} download>
          <button className='text-xl bg-white rounded-full btn px-7'><FaDownload />RESUME</button>

          
</a>
        </div>
      </div>
    </div>
  )
}

export default Header
