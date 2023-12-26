import React from 'react'
import SectionPadding from './SectionPadding'
import {motion} from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Goals = () => {
  return (
    <SectionPadding>
        <div className='grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 mt-20 '>
            <motion.div 
                initial={{
                    x:-200
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    duration:0.5,
                }} className=' border-[1px] rounded-3xl  '>
                <div className={`relative h-[250px] w-[100%] bg-[url('/images/backgroundgoals.png')] bg-center bg-cover bg-no-repeat rounded-t-3xl `}>
                    <div className='bg-[#C9507A] p-4 rounded-3xl absolute top-0 right-0 m-5 '>
                        <ArrowRight color='white' size={38} />
                    </div>
                </div>
                <h2 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px] p-12 '>Sustainability Development Goals</h2>
                <p className='px-12 mb-10 '>At Well of Science, we provide innovative tech solutions to the environmental and socio-economic problems that haunt our society. 

                We are unreservedly contributing our quota to the realization of all the agendas that make up the SDGs with our focus on:</p>
            </motion.div>
            <div className='text-white space-y-6 '>
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
                className='bg-[#7C5DA4] rounded-3xl p-6'>
                    <h1 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px]  '>SDG #8</h1>
                    <p>Decent work and economic growth.</p>
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
                className='bg-[#4B7810] rounded-3xl p-6'>
                    <h1 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px]  '>SDG #9</h1>
                    <p>Industry, Innovation, and Infrastructure.</p>
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
                className='bg-[#F9BB8D] rounded-3xl p-6'>
                    <h1 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px]  '>SDG #10</h1>
                    <p>Sustainable cities and communities.</p>
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
                className='bg-[#80328A] rounded-3xl p-6'>
                    <h1 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px]  '>SDG #11</h1>
                    <p>Partnerships to achieve the goal.</p>
                </motion.div>
            </div>
        </div>
    </SectionPadding>
  )
}

export default Goals