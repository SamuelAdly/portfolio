//Contact page for portfolio
'use client'
import { useState } from 'react';
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [isPhoneVisible, setIsPhoneVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    // Toggle phone number visibility. When its pressed the visitor can see or un-see phone number
    const togglePhoneVisibility = () => {
        setIsPhoneVisible(!isPhoneVisible);
    };
    //when a user types something it gets updated in the formdata 
    //example: user enters their name, now the formdata, in this case name, gets updated
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    /*
    - prevents the formdata from being submitted as its default values (this case blank), then it uses the emailjs services to send me an email with
    name, email, and message so that i can contact them back
    - if it works display it works then reset to default
    - if fails tell the user it failed*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus('');
        try {
            await emailjs.sendForm(
                'service_mxq012b',
                'template_fmqq5rs',
                e.target,
                'q7Jm84Btncbz3G2Y4'
            );
            setSubmissionStatus('Your message has been sent!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmissionStatus('There was an error sending your message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        //underneath div just to ensure that the page is the entire screens height
        //dont think bg and text color are needed since later tags change the colors
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="relative bg-gray-800 overflow-hidden">
                {/*depending on screen size the padding and font properties change. Below it displays the contact page title, icons that can be clicked, and the contact form*/}
                <div className="min-h-screen max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-blue-400 mb-8">Contact Me</h2>
                    <div className="flex justify-center space-x-4 mb-8">
                        <a href="https://www.linkedin.com/in/samuel-adly-901509227" className="rounded-full border border-blue-400 p-2 hover:bg-blue-600 transition duration-300" aria-label="LinkedIn Profile">
                            <FaLinkedin className="text-blue-400 w-8 h-8" />
                        </a>
                        <a href="mailto:samadly13@gmail.com" className="rounded-full border border-blue-400 p-2 hover:bg-blue-600 transition duration-300" aria-label="Send Email">
                            <MdEmail className="text-blue-400 w-8 h-8" />
                        </a>
                        <a href="https://github.com/SamuelAdly" className="rounded-full border border-blue-400 p-2 hover:bg-blue-600 transition duration-300" aria-label="GitHub Profile">
                            <VscGithubAlt className="text-blue-400 w-8 h-8" />
                        </a>
                        <button 
                            onClick={togglePhoneVisibility} 
                            className="rounded-full border border-blue-400 p-2 hover:bg-blue-600 transition duration-300 focus:outline-none"
                            aria-label={isPhoneVisible ? "Hide Phone Number" : "Show Phone Number"}
                        >
                            <FaPhoneAlt className="text-blue-400 w-8 h-8" />
                        </button>
                    </div>
                    {isPhoneVisible && (
                        <div className="mt-4 text-lg text-blue-400">
                            <p>Phone: 347-489-3953</p>
                        </div>
                    )}
                    {/* Contact Form */}
                    <section className="mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-2xl font-bold sm:text-3xl tracking-tight text-blue-400 mb-6">Contact Form</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-lg text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-lg text-gray-300 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded bg-blue-600 text-white hover:bg-blue-500 transition duration-300 disabled:bg-blue-400"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submissionStatus && (
                                <div className={`mt-4 text-center ${submissionStatus.includes('error') ? 'text-red-400' : 'text-green-400'}`} aria-live="polite">
                                    <p>{submissionStatus}</p>
                                </div>
                            )}
                        </form>
                    </section>
                </div>
            </header>
        </div>
    );
}
