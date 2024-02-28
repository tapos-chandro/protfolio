
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();
    
 

    const serverKey = import.meta.env.VITE_SOME_SERVICE_KEY
    const publicKey = import.meta.env.VITE_SOME_PUBLIC_KEY
    const handleSubmit = (e) => {
        e.preventDefault()
        // // const name = e.target.name.value;
        const form = e.target
        // console.log(  )
        // const name = form.name.value;
        // const email = form.email.value;
        // const massage = form.massage.value;
        // const formData = {
        //     name, 
        //     email,
        //     massage
        // }

        // console.log(formData)
        // const email = form.name.value;
        // const massage = form.name.value;

        // // const formData = {
        // //     // name,
        // //     email,
        // //     massage
        // // }

        // // console.log( formData)
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
            <div className="w-1/2 mx-auto ">
            <h1 className="mb-5 text-4xl font-semibold text-center ">Contact Us</h1>
            <form ref={form} onSubmit={handleSubmit}>
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your name</span>
                </div>
                <input type="text" placeholder="Your name" name="name" className="w-full text-xl rounded-badge input input-bordered" />
            </label>
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your email</span>
                </div>
                <input type="email" placeholder="Your email" name="email" className="w-full text-xl rounded-badge input input-bordered" />
            </label>
            <label className="w-full form-control">
                <div className="label">
                    <span className="text-2xl label-text">Your massage</span>
                </div>
                <textarea className="text-xl rounded-badge textarea textarea-bordered" name="message" placeholder="Your massage"></textarea>
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