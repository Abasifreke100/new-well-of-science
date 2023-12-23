import React from 'react'
import SectionPadding from './SectionPadding'
import logocolor from '../../../public/images/logocolor.png'
import {motion} from 'framer-motion'

const Quote = () => {
  return (
    <SectionPadding>
        <motion.div 
            initial={{
                y:200
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.5,
            }} className='py-36 px-48 rounded-[100px] bg-[#3D3D3D] mb-9 text-white text-center text-[20px] md:text-[24px] sm:text-[32px]  flex flex-col justify-center items-center relative  '>
            <svg className='absolute top-0 right-0 ' xmlns="http://www.w3.org/2000/svg" width="445" height="175" viewBox="0 0 445 175" fill="none">
              <path opacity="0.3" d="M1.00117 -97.6409C56.6469 -99.4251 181.886 -89.4146 237.676 -35.099C307.413 32.7954 489.76 178.42 597.829 172.549" stroke="#DFE4D9" stroke-width="4"/>
            </svg>
            <motion.p 
                initial={{
                    y:200,
                    opacity:0
                }}
                whileInView={{
                    y:0,
                    opacity:1
                }}
                transition={{
                    duration:0.4,
                }}>
                    “ We pride ourselves on taking a 360-view of every issue before attempting to tackle it. In this short period of existence, we have leveraged sustainability as a competitive advantage, embedding it as a core value that informs every aspect of our business operations. ”
            </motion.p>
            
            <div className='flex flex-col content-center my-5 mt-10 '>
                <img src={logocolor} alt="" className='w-[30%] self-center ' />
                <h3 className='capitalize text-center '>The Well Of science</h3>
            </div>
            <svg className='absolute left-0 bottom-0' xmlns="http://www.w3.org/2000/svg" width="454" height="153" viewBox="0 0 454 153" fill="none">
                <path opacity="0.3" d="M-70.9996 2.54511C-16.285 12.8378 103.825 49.6971 146.548 114.793C199.951 196.163 346.488 377.777 453.268 395.417" stroke="#DFE4D9" stroke-width="4"/>
            </svg>
        </motion.div>
    </SectionPadding>
  )
}

export default Quote