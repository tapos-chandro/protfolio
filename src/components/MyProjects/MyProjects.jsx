const MyProjects = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center mt-7'>My Projects</h1>

      <div className='grid grid-cols-1 gap-10 mt-20 lg:grid-cols-3 md:grid-cols-2'>
        <div className='shadow-xl card bg-base-100'   data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <div className='m-auto overflow-hidden  h-[300px] hover:cursor-pointer' >
            <figure className='hover:h-full object-cover hover:pb-[700px] hover:mx-[100px] transition-all duration-[2000ms] ease-in-out '>
              <img
                src='https://i.ibb.co/y5HsVQ0/screencapture-brand-shop-v1-netlify-app-2024-02-26-21-29-28.png'
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Brand Shop</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a href='https://brand-shop-v1.netlify.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-tapos-ctrl?tab=readme-ov-file'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-tapos-ctrl'>SERVER SITE</a>
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
                src='https://i.ibb.co/p3gK2cr/screencapture-frodi-restaurant-web-app-2024-02-28-12-02-40.png'
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Foodi Restaurant</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a href='https://frodi-restaurant.web.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/Porgramming-Hero-web-course/b8a11-client-side-tapos-ctrl?tab=readme-ov-file'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/Porgramming-Hero-web-course/b8a11-server-side-tapos-ctrl'>SERVER SITE</a>
              </div>
            </div>
          </div>
        </div>
        <div className='shadow-xl card bg-base-100 '
        data-aos="zoom-in-left"
        data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className='m-auto overflow-hidden  h-[300px] hover:cursor-pointer'>
            <figure className='hover:h-full object-cover hover:pb-[700px] hover:mx-[100px] transition-all duration-[2000ms] ease-in-out '>
              <img
                src='https://i.ibb.co/SnNXkb5/screencapture-bistro-boss-3473d-web-app-2024-02-28-17-18-12.png'
                alt='Shoes'
              />
            </figure>
          </div>
          <div className='card-body'>
            <h2 className='text-2xl card-title'>Bistro Boss</h2>
            <p>MERN Stack</p>
            <div className='flex justify-around card-actions'>
              <div className='p-4 px-6 font-bold badge badge-outline hover:bg-slate-300 '>
                <a href='https://bistro-boss-3473d.web.app/'>LIVE SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/tapos-ctrl/bistro-boss-clint?tab=readme-ov-file'>CLIENT SITE</a>
              </div>
              <div className='p-4 font-bold px-7 badge badge-outline hover:bg-slate-300 '>
                <a href='https://github.com/tapos-ctrl/bistro-boss-server'>SERVER SITE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
