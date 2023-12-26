import React from 'react'
import SectionPadding from './SectionPadding'
import {motion} from 'framer-motion'

const PartnershipMain = () => {
  return (
    <SectionPadding>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center '>
            <motion.div 
            initial={{
                y:400
            }}
            whileInView={{
                y:0
            }}
            transition={{
                duration:0.4
            }}
            className="relative bg-[url('/images/lines.png')] bg-center bg-cover ">
                <h1 className='font-gen_sans font-semibold text-[40px] sm:text-[52px] md:text-[56px] '>Let’s build a Sustainable Future</h1>
                <img src="/images/vector27.png" alt="" className='absolute -z-10 bottom-0 md:bottom-0 w-[70%] md:w-[50%] ' />
                <h1 className='font-gen_sans font-semibold text-[40px] sm:text-[52px] md:text-[56px] '>Together.</h1>
            </motion.div>
            <img src="/images/illust1.png" alt="" className='w-[100%]  ' />
        </div>
    </SectionPadding>
  )
}

export default PartnershipMain
