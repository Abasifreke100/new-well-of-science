import React from 'react'
import { Link } from 'react-router-dom'
import { ThumbsUp } from 'lucide-react'
import {motion} from 'framer-motion'
import { Button } from './button'


const OverlayMessage = () => {
  return (
    // Overlay 
    <div className='absolute grid place-content-center bg-dark_bg backdrop-opacity-20 backdrop-blur-lg h-screen w-screen -top-8 -left-0 z-[10000000]  '>
        <motion.div 
        initial={{
            y:200
        }}
        whileInView={{
            y:0
        }}
        className='bg-white rounded-3xl flex flex-col p-10 md:p-20 h-[410px]  content-center self-center relative mx-10 md:mx-0 '>
            <svg className='absolute top-0 left-0 rounded-tl-3xl rounded-bl-3xl  ' xmlns="http://www.w3.org/2000/svg" width="420" height="410" viewBox="0 0 420 492" fill="none">
                <path opacity="0.25" d="M310.447 35.2429C401.918 18.8779 444.33 -88.7496 401.329 -219.438C346.232 -248.433 230.839 -307.314 210.036 -310.885C184.033 -315.348 130.161 -295.286 -16.1831 -234.11C-162.527 -172.933 -182.558 -134.038 -287.626 -67.4055C-392.695 -0.772963 -338.501 118.838 -340.367 147.825C-342.233 176.812 -300.239 318.617 -268.885 376.1L-125.179 639.565C-112.637 662.559 19.6761 775.505 84.265 829.105C68.0541 802.985 65.6764 708.875 185.854 541.391C349.273 430.501 180.223 504.062 64.3563 318.643C-51.5104 133.224 79.2527 189.317 143.2 58.0973C194.359 -46.8784 227.122 29.8698 310.447 35.2429Z" fill="#D9D9D9" stroke="#D9D9D9" stroke-width="2"/>
            </svg>
            <p className='bg-pink p-4 rounded-full mx-auto self-center '>
                <ThumbsUp size={32} color='#fff' />
            </p>
            <h2 className='font-gen_sans font-semibold text-[20px] sm:text-[24px] md:text-[32px] text-center my-5 '>Thank you for contacting us</h2>
            <p className='text-center font-inter text-[14px] md:text-[16px] mb-5 ' >We’ll give you a call or send a mail within 48 hours.</p>
            <Button asChild className={"flex mx-auto "}>
                <Link to={'/'} >Back to home</Link>
            </Button>
        </motion.div>
    </div>
  )
}

export default OverlayMessage