import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-slate-200">
            <footer className="p-10 rounded footer footer-center text-base-content">
                {/* <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>  */}
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/taposKumar24" className="text-4xl"><FaFacebookF /></a>
                    <a href="https://twitter.com/home?lang=en" className="text-4xl"><FaTwitter/></a>
                    <a href="https://www.linkedin.com/in/tapos-chandro/" className="text-4xl"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/tapos555/" className="text-4xl"><FaInstagram/></a>
                    <a href="https://github.com/tapos-ctrl" className="text-4xl"><FaGithub/></a>
                    </div>
                </nav> 
                <aside>
                    <p className="lg:text-2xl">Copyright © 2024 - All right reserved by Tapos Chandro</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;