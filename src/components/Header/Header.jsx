import TextAnimation from '../TextAnimation/TextAnimation'
import { FaDownload } from "react-icons/fa6";
import pdf from "../../assets/Tapos Chandro.pdf"

const Header = () => {
  return (
    <div className='hero py-10'>
      <div className='hero-content flex-col lg:flex-row-reverse justify-between w-full'>
        <div className='h-full'>
        <img
          src='https://i.ibb.co/Rjwhd7b/removal-ai-8909ef5a-2611-4b3b-b3d2-86755d897f5a-tapos.png'
          className=' rounded-lg shadow-2xl h-full w-full'
        />
        </div>
        <div className=' w-full '>
          <h1 className='lg:text-5xl text-2xl font-bold'>Hi, my name is Tapos Chandro</h1>
          <TextAnimation className="py-4"></TextAnimation>
          <p className='pb-6 text-lg pt-3'>I want to take on the challenge of web development. Where I can refine my skill and expand my knowledge. As an engineering student, I know how to handle situations during complicated times.</p>

          <a href={pdf} download>
          <button className='btn text-xl rounded-full bg-white px-7'><FaDownload />RESUME</button>

          
</a>
        </div>
      </div>
    </div>
  )
}

export default Header
