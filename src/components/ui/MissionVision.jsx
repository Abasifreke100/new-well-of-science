import React from 'react'
import SectionPadding from './SectionPadding'
import { Crosshair, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

const MissionVision = () => {
  return (
    <SectionPadding>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-40 p  '>
        <motion.div 
        initial={{
            x: -100
        }}
        whileInView ={{
            x: 0
        }}
        transition={{
            duration:1,
        }}
        className='p-10 flex flex-col gap-6 border-[1px] rounded-3xl border-black  '>
            <h2 className='font-gen_sans text-[20px] sm:text-[32px] md:text-[40px] font-semibold '>We are the <br/> <m className='text-[#82C335]'>Well Of Science</m></h2>
            <p className='font-inter text-[14px] md:text-[16px] '>We are Well of Science, registered in Nigeria with RC Number: 1657757. With a global footprint, we do the impossible, the unthinkable, and the unimaginable, taking up one value chain at a time and advancing sustainability across its business processes for the common good of all.</p>
        </motion.div>
        <div className='flex flex-col gap-6 text-white '>
            <motion.div
            initial={{
                x: 100
            }}
            whileInView ={{
                x: 0
            }}
            transition={{
                duration:1,
            }}
            className='bg-[#36859D] rounded-3xl p-6'>
                <div className='flex flex-row items-center content-center justify-between mb-6  '>
                    <h1 className='font-gen_sans font-semibold text-[20px] sm:text-[24px] md:text-[32px]  '>Our mission</h1>
                    <p className='bg-white p-2 rounded-full'>
                        <Crosshair size={28} color='#36859D' />
                    </p>
                    {/* Icon here */}
                </div>
                <p>Reaching the zenith of sustainability business, impacting the lives of millions as we climb</p>
            </motion.div>
            <motion.div 
            initial={{
                x: 100
            }}
            whileInView ={{
                x: 0
            }}
            transition={{
                duration:1,
            }}
            className='bg-pink rounded-3xl p-6'>
                <div className='flex flex-row items-center content-center justify-between mb-6  '>
                    <h1 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px]  '>Our Vision</h1>
                    <p className='bg-white p-2 rounded-full'>
                        <Eye size={28} color='#C9507A' />
                    </p>
                    {/* Icon here */}
                </div>
                <p>We are on course to develop and deploy sustainable, innovative, and people-focused solutions and projects to improve business processes, enhance resource utilization, transform communities, improve livelihoods and restore the environment</p>
            </motion.div>
        </div>
    </div>
    </SectionPadding>
  )
}

export default MissionVision