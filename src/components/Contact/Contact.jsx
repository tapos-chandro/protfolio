
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const form = useRef();
    AOS.init();
    
 

    const serverKey = import.meta.env.VITE_SOME_SERVICE_KEY
    const publicKey = import.meta.env.VITE_SOME_PUBLIC_KEY
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        console.log(publicKey, serverKey)

        emailjs.sendForm(`${serverKey}`, 'email-services', form, `${publicKey}`)
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error.text);
        });
 
    }



    return (
        <div className="pt-10 pb-20 mt-32 bg-slate-200 rounded-xl">
            <div className="px-10 mx-auto lg:px-0 md:px-0 lg:w-1/2 md:w-1/2 "  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h1 className="mb-5 text-4xl font-semibold text-center ">Contact Us</h1>
            <form ref={form} onSubmit={handleSubmit} >
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your name</span>
                </div>
                <input type="text" placeholder="Your name" name="name" className="w-full text-xl rounded-badge input input-bordered" required/>
            </label>
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your email</span>
                </div>
                <input type="email" placeholder="Your email" name="email" className="w-full text-xl rounded-badge input input-bordered" required/>
            </label>
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your massage</span>
                </div>
                <textarea className="text-xl rounded-badge textarea textarea-bordered" name="message" placeholder="Your massage" required></textarea>
            </label>
            <div className="py-2 my-4 bg-blue-400 rounded-badge hover:text-white">
            <button type="submit" className="w-full py-2 text-2xl font-semibold ">Send Now</button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default Contact;