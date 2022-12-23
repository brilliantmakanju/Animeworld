import dynamic from 'next/dynamic'
import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
const Link = dynamic(() => import("next/link"))
const Image = dynamic(() => import("next/image"))
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Popup from './Popup'

const Contact = () => {

    const [froms, setFrom] = useState()
    const [emails, setEmail] = useState()
    const [message, setMessage] = useState()
    const [popup, setPopup] = useState(false)
    const [popup2, setPopup2] = useState(false)

    const handleName = event => {
        setFrom(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handleMessage = event => {
        setMessage(event.target.value)
    }

    const sendEmail = (e) => {

        emailjs.init("U1npzXOoMaHjVb_0t")

        e.preventDefault()

        emailjs.send(
            'service_66ptiel',
            'template_rhmkz28',
            {
                from_name: froms,
                message: message,
                reply_to: emails,
            }

        )

            .then(
                () => {
                    setPopup(true)
                },
                () => {
                    setPopup2(true)
                }
            )
    }

    return (
        <div className='w-full lg:h-screen' id='contact' >
            
            <div className={` ${popup ? ' fixed left-0 top-0 w-full h-screen bg-[#0c0b0bbb] ' : '  '}  `}></div>
            <div className={`${popup ? "popup" : "popout hidden"} fixed  md:left-[71vh] left-[5vh] top-[50vh] right-auto bg-[#bccec9] w-[80%] md:w-[30%] mx-auto my-auto translate-x-[50%] translate-y-[-50%] shadow-xl shadow-gray-700 rounded-lg`} >
                <p onClick={(() => setPopup(false))} className='text-[white] h-[40px] flex items-center justify-center w-[40px] rounded-[100%] bg-slate-600 absolute p-3 top-2 right-2 shadow-md shadow-[#493f2c] ' >X</p>
                <h2 className='w-full rounded-lg p-2 border-[#1d1c1c] border-2 border-b-5 '>Message Sent</h2>
                <p className='p-10 text-center font-bold text-[green] ' > Your Message has been sent Successfully. </p>
            </div>

            <div className={` ${popup2 ? ' fixed left-0 top-0 w-full h-screen bg-[#0c0b0bbb] ' : '  '}  `}></div>
            <div className={`${popup2 ? "popup" : "popout"} fixed  md:left-[71vh] left-[5vh] top-[50vh] right-auto bg-[#bccec9] w-[80%] md:w-[30%] mx-auto my-auto translate-x-[50%] translate-y-[-50%] shadow-xl shadow-gray-700 rounded-lg`} >
                <p onClick={(() => setPopup2(false))} className='text-[white] h-[40px] flex items-center justify-center w-[40px] rounded-[100%] bg-slate-600 absolute p-3 top-2 right-2 shadow-md shadow-[#493f2c] ' >X</p>
                <h2 className='w-full rounded-lg p-2 border-[#1d1c1c] border-2 border-b-5 '>Message Failed</h2>
                <p className='p-10 text-center font-bold text-[red] ' > Sorry an Error Occured. can you send the message again, Thank you. </p>
            </div>

            <div className='max-w-[1240px] m-auto px-2 py-16 w-full ' >
                <p className='text-xl tracking-widest uppercase text-[#5e51e5] ' >Contact</p>
                <h2 className='py-4' >Get in touch</h2>
                <div className='grid justify-center mx-auto items-center h-auto lg:grid-cols-5 gap-8 ' >
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4 ' >
                        <div className='lg:p-4 h-full ' >
                            <div className='shadow-ss '>
                                <Image
                                    width={'350'}
                                    height={'20'}
                                    alt='Contact Image'
                                    src='/projects/img-1.jpg'
                                    className='w-full rounded-xl hover:scale-[1.03] ease-in duration-300 '
                                />
                            </div>
                            <div >
                                <h2 className='py-2' >Alkis Savoullis</h2>
                                <p>Front-End Engineer</p>
                                <p className='py-4' >I am available for freelance and full-time position. Contact me and let's talk.</p>
                            </div>
                            <div>
                                <p className='uppercase' >Connect with me</p>
                                <div className='flex items-center justify-between py-4 ' >
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-700 p-5 cursor-pointer hover:scale-105 ease-in duration-300 '>
                                        <BsPersonFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 w-full shadow-lg shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4' >
                            <form onSubmit={sendEmail} >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 '>Name</label>
                                        <input type="text" onChange={handleName} value={froms} name="user_name" className='border-2 rounded-xl p-3 flex border-gray-300' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm w-full py-2 '>Email</label>
                                        <input type="email" onChange={handleEmail} name="email" className='border-2 rounded-xl p-3 flex border-gray-300' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm w-full py-2 '>Subject</label>
                                    <input type="text" className='border-2 rounded-xl p-3 flex border-gray-300' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm w-full py-2 '>Message</label>
                                    <textarea onChange={handleMessage} className='border-2 rounded-lg p-3 border-gray-400 ' name='message' rows='10' />
                                </div>
                                <input type="submit" className=' w-full md:w-[25%] rounded-xl text-white bg-black text-center p-4 mt-4 ' value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12' >
                    <Link href='/'>
                        <div className='rounded-full shadow-lg  shadow-gray-600 p-4 cursor-pointer hover:scale-[1.03] ease-in duration-300  ' >
                            <HiOutlineChevronDoubleUp className='m-auto text-[#5e51e5] ' size='30' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact