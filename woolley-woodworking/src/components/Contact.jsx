import React, { Component } from 'react';
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {VscLocation} from 'react-icons/vsc'
import { FiFacebook } from "react-icons/fi";

class Contact extends Component {
    render() {
        return (
            <div>
                <div className='bg-gray-100'>
                <div className='flex w-full min-h-screen justify-center items-center'>
                    <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
                                <p className='pt-2 text-cyan-100 text-sm'> this is  test Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-cyan-100'>
                                    <FiPhoneCall />
                                    <span> +123 456 7890</span> 
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-cyan-100'>
                                    <HiOutlineMail />
                                    <span>Marcwoolley@gmail.com</span>
                                </div>
                            </div>
                            
                            <div>
                                <div className='flex flex-row p-5 space-x-3 text-cyan-100'>
                                    <VscLocation />
                                    <span>Steamboat Springs, Colorado</span>
                                </div>
                            </div>
                            <div className='flex flex-row space-x-4 text-lg'>
                                <a href="#"><FiFacebook /></a>
                            </div>                 
                        </div>
                        <div className='relative'>
                            <div className='absolute w-40 h-40 bg-teal-400 rounded-full -right-20 -top-20'></div>
                            <div className='absolute w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20'></div>
                            <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 '>
                                <form action="" className='flex flex-col space-y-4'>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Your Name</label>
                                    </div>
                                        <div>
                                            <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                        </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Email Address</label>
                                    </div>
                                        <div>
                                            <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                        </div>
                                    </div>
                                    <div>
                                    <div>
                                        <label htmlFor="" className='text-sm'>Message</label>
                                    </div>
                                    <div>
                                        <textarea type="text" placeholder='Type a brief message here' rows={4} className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                                    </div>
                                    </div>
                                    <button className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
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