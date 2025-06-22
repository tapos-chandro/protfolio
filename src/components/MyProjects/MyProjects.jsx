import miniMission from '../../../src/assets/mini-mission.png'
import Blog from '../../../src/assets/blog.png'
import crowdfund from '../../../src/assets/crodfound.png'


const MyProjects = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center mt-7'>My Projects</h1>

      <div className='grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2'>
        <div className='shadow-xl card bg-base-100'   data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div className='m-auto overflow-hidden  h-[300px] hover:cursor-pointer' >
            <figure className='hover:h-full object-cover hover:pb-[700px] hover:mx-[100px] transition-all duration-[2000ms] ease-in-out '>
              <img
                src={miniMission}
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Mini missions</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a target="_blank"  href='https://mini-missions.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/mini-missions-client'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/mini-missions-server'>SERVER SITE</a>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-xl card bg-base-100 ' data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        
        >
          <div className='m-auto overflow-hidden  h-[300px] hover:cursor-pointer'>
            <figure className='hover:h-full object-cover hover:pb-[700px] hover:mx-[100px] transition-all duration-[2000ms] ease-in-out '>
              <img
                src={Blog}
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Blog</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://blog-wibsite.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/blog-website-client'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/blog-website-server'>SERVER SITE</a>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-xl card bg-base-100 '
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
           data-aos-easing="linear"
           data-aos-duration="1500"
        >
          <div className='m-auto overflow-hidden  h-[300px] hover:cursor-pointer'>
            <figure className='hover:h-full object-cover hover:pb-[700px] hover:mx-[100px] transition-all duration-[2000ms] ease-in-out '>
              <img
                src={crowdfund}
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Crowd Fund</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://helpful-mooncake-cfc5b8.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/Crowd-Funding-Client'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a target="_blank" href='https://github.com/tapos-chandro/Crowd-Funding-Server'>SERVER SITE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
