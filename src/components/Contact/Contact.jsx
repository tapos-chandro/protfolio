import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import { Element } from 'react-scroll';

const Contact = () => {
    const form = useRef();
    AOS.init();

    const serverKey = import.meta.env.VITE_SOME_SERVICE_KEY;
    const publicKey = import.meta.env.VITE_SOME_PUBLIC_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = e.target;

        emailjs.sendForm(`${serverKey}`, 'email-services', formElement, `${publicKey}`)
            .then((result) => {
                if (result) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Message sent successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    formElement.reset();
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Element name='contact'>
            <div className="max-w-4xl px-6 py-16 mx-auto mt-10 bg-white border border-gray-200 shadow-xl rounded-3xl">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 gap-6 mb-12 text-center sm:grid-cols-2">
                    <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-lg font-semibold text-gray-700">📧 Email</p>
                        <p className="text-gray-600 break-words">taposchandro231@gmail.com</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-lg font-semibold text-gray-700">📞 Phone</p>
                        <p className="text-gray-600">+8801855796524</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-lg font-semibold text-gray-700">💼 LinkedIn</p>
                        <a
                            href="https://www.linkedin.com/in/tapos-chandro/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            linkedin.com/in/tapos-chandro/
                        </a>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-xl">
                        <p className="text-lg font-semibold text-gray-700">👨‍💻 GitHub</p>
                        <a
                            href="https://github.com/tapos-chandro"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            github.com/tapos-chandro
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} ref={form} className="space-y-8">
                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-lg font-medium text-gray-700">Your Message</label>
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 text-lg border border-gray-300 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-xl font-semibold text-white transition duration-300 shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 rounded-xl"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </Element>
    );
};

export default Contact;
