import React, { Component } from 'react';
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {VscLocation} from 'react-icons/vsc'
import { FiFacebook } from "react-icons/fi";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className='bg-gray-200'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-charcoal w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='font-bold text-4xl tracking-wide text-cream'>Contact Me</h1>
                                <p className='pt-2 text-gold text-sm'> this is  test Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-gold '>
                                    <FiPhoneCall />
                                    <span> +970 291 9058</span> 
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-gold'>
                                    <HiOutlineMail />
                                    <span>Marcwoolley@gmail.com</span>
                                </div>
                            </div>
                            
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-gold'>
                                    <VscLocation />
                                    <span>Steamboat Springs, Colorado</span>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 text-3xl text-gold'>
                                <a href="#"><FiFacebook /></a>
                            </div>                 
                        </div>
                        <div className='relative'>
                            <div className='absolute w-40 h-40 bg-tan rounded-full -right-20 -top-20'></div>
                            <div className='absolute w-40 h-40 bg-tan rounded-full -left-20 -bottom-20'></div>
                            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 '>
                                <form action="" className='flex flex-col space-y-4'>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Your Name</label>
                                    </div>
                                        <div>
                                            <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' />
                                        </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Email Address</label>
                                    </div>
                                        <div>
                                            <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500' />
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Message</label>
                                    </div>
                                    <div>
                                        <textarea type="text" placeholder='Type a brief message here' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-500'></textarea>
                                    </div>
                                    </div>
                                    <button className='inline-block self-end bg-tan text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                                </form>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Contact;



// https://mailtrap.io/blog/react-contact-form/  USE THIS FOR THE BACKEND PART OF THE CONTACT FORM
//  or this https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3