import React from 'react'
import SectionPadding from './SectionPadding'
import etiat1 from '../../assets/etiat1.png'
import etiat2 from '../../assets/etiat2.png'
import TeamNamePic from './TeamNamePic'
import { motion } from 'framer-motion'
import {teamMembers} from '../../config/team.js'
// import lightLogo from '../../../public/images/lightlogo.png'

const Team = () => {
  return (
    <>
    <SectionPadding >
        <div>
            <h2 className='font-gen_sans text-[20px] sm:text-[32px] md:text-[40px] font-semibold text-center my-10 '>The Team</h2>
            <div className='grid md:grid-cols-[1fr_2fr_1fr] grid-cols-1 align-middle content-center items-center  gap-6 '>
                {/* <div className='flex flex-col justify-center '>
                    <img src={etiat1} alt="" />
                    <div className='bg-white  rounded-2xl text-center text-[20px] shadow-xl justify-center mx-1 my-6 -rotate-6 '>
                        <h4 className='border-[1px] rounded-t-2xl p-2 '>Etia Nwaenang</h4>
                        <h4 className='bg-pink rounded-b-2xl p-2 '>Co-founder</h4>
                    </div>
                </div> */}
                <motion.div
                initial={{
                    x:-200
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    duration:1,
                }}
                >
                    <TeamNamePic role={'Co-Founder'} img={etiat2} name={'Etia Nwaenang'} roleBg={'pink'} rotate={'-rotate-6'} className />
                    
                </motion.div>
                <motion.div 
                initial={{
                    y:200
                }}
                whileInView={{
                    y:0
                }}
                transition={{
                    duration:0.5,
                }}
                className='bg-green_four text-white rounded-3xl p-6  '>
                    {/* <div className={`bg-[url(${lightLogo})]  `}> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="4" viewBox="0 0 80 4" fill="none">
                        <path d="M2 2H78" stroke="#CCCCCC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                        <h2 className='text-[20px] sm:text-[24px] md:text-[32px] font-gen_sans py-6 '>Our Story</h2>
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
                        }}
                        className={`font-gen_sans bg-[url(./../../public/images/lightlogo.png)] w-[100%] bg-center bg-no-repeat `}>Our co-founders, Etiat Nwaenang and Ubong Inyang are brilliant tech enthusiasts and social entrepreneurs, prowling the sustainability and tech business landscape for opportunities to effect a positive change in the environment and impact as many lives as possible.
                        <br />
                        <br />
                        This call to action, known as the Sustainable Development Goals (SDGs), was all the motivation Etia and Ubong needed to align their business goals with the global movement towards sustainability while creating positive economic, social, and environmental impact.
                        <br />
                        <br />
                        Then it happened
                        <br />
                        <br />
                        As if perceiving their deepest desires, in 2015 the United Nations adopted a 17-point Universal Blueprint to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030.
                        <br />
                        <br />
                        After years of strategizing, testing, and meticulous research to overcome the hurdles of incubating an impact-driven start-up in Nigeria, Well of Science was birthed.</motion.p>
                    {/* </div> */}
                </motion.div>
                <motion.div
                initial={{
                    x:200
                }}
                whileInView={{
                    x:0
                }}
                transition={{
                    duration:1,
                }}
                >
                    <TeamNamePic role={'Co-Founder'} img={etiat1} name={'Ubong Inyang'} roleBg={'pink'} rotate={'rotate-6'} />
                    
                </motion.div>
            </div>
            
        </div>
    </SectionPadding>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 my-40 bg-[#F4F4F4] px-4 md:px-24 py-10 rounded-[100px]  '>
        {
            teamMembers.map(({name, img, role, roleBg, rotate }) => {
                return(
                    <TeamNamePic img={img} name={name} role={role} roleBg={roleBg} rotate={rotate}  />
                )
            })
        }
    </div>
    </>
  )
}

export default Team