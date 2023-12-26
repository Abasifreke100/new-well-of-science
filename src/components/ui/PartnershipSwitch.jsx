import React, { useState } from 'react'
import SectionPadding from './SectionPadding'
import { Button } from './button'
import { Link } from 'react-router-dom'

const PartnershipSwitch = () => {

    // State Logic
    const [switchState, setSwitchState] = useState(true)
    const [switchState2, setSwitchState2] = useState(true)


  return (
    <SectionPadding>
        <div className='py-24 '>
            <h2 className='font-gen_sans font-semibold ext-[20px] sm:text-[24px] md:text-[32px] '>Partnership</h2>
            <div className='flex flex-row gap-6 border-b-[1px] mb-5 text-[14px] md:text-[16px] '>
                <h4 
                className={`${switchState === true && 'border-b-4 border-green_two ' } bg-white cursor-pointer py-5 `}
                onClick={() => setSwitchState(true)}>Responsible R&R</h4>
                <h4 
                className={`${switchState === false && 'border-b-4 border-green_two ' } bg-white cursor-pointer py-5 `}
                onClick={() => setSwitchState(false)}>Innovation Consulting</h4>
            </div>
            {
                switchState === true ? 
                <div>
                    <div className='grid gir-cols-1  md:grid-cols-2 gap-6 justify-items-center text-[14px] md:text-[16px] '>
                        <div className=' order-last md:order-first '>
                            Responsible, recollection, and recycling are crucial for sustainable resource and environmental management. This initiative advocates for the ethical collection and recycling of PET, PP, and HDPE plastic materials, assisting companies and organizations in monitoring their plastic footprint throughout the entire lifecycle—from consumption to recollection and recycling.
                            <br />
                            <br />
                            The "Responsible Recollection and Recycling" concept places a strong emphasis on ethical and sustainable practices. It encourages the measurement of plastic waste generated and the tracking of impact metrics to advance environmentally conscious collection methods and responsible recycling processes, ultimately minimizing the adverse effects of plastic waste pollution. This approach is designed to foster a more responsible and eco-friendly approach to resource management.
                        </div>
                        <img src="/images/partnershippic1.png" alt="" />
                    </div>
                    {/* Second switcher */}
                    <h2 className='font-gen_sans font-semibold ext-[16px] sm:text-[18px] md:text-[24px] mt-10 '>Embracing Sustainable Alternatives To Plastic </h2>
                    <div className='flex flex-row gap-6  '>
                        <h4 
                        className={`  ${switchState2 === true ? 'bg-green_two text-white ' : 'bg-zinc-200' }  cursor-pointer p-5 rounded-t-3xl `}
                        onClick={() => setSwitchState2(true)}>Kenaf</h4>
                        <h4 
                        className={` ${switchState2 === false ? ' bg-green_two text-white ' : 'bg-zinc-200' } cursor-pointer p-5 rounded-t-3xl `}
                        onClick={() => setSwitchState2(false)}>Banana FIber</h4>
                    </div>
                    {
                        switchState2 === true ? 
                            <div className='grid gir-cols-1 md:grid-cols-2 gap-6 justify-items-center p-10 bg-slate-700 text-white rounded-b-3xl rounded-tr-3xl text-[14px] md:text-[16px] '>
                                <div className='order-last md:order-first'>
                                    Responsible, recollection, and recycling are crucial for sustainable resource and environmental management. This initiative advocates for the ethical collection and recycling of PET, PP, and HDPE plastic materials, assisting companies and organizations in monitoring their plastic footprint throughout the entire lifecycle—from consumption to recollection and recycling.
                                    <br />
                                    <br />
                                    The "Responsible Recollection and Recycling" concept places a strong emphasis on ethical and sustainable practices. It encourages the measurement of plastic waste generated and the tracking of impact metrics to advance environmentally conscious collection methods and responsible recycling processes, ultimately minimizing the adverse effects of plastic waste pollution. This approach is designed to foster a more responsible and eco-friendly approach to resource management.
                                </div>
                                <img src="/images/partnershippicdown1.png" alt="" className='rounded-3xl' />
                            </div>
                        :
                            <div className='grid gir-cols-1 md:grid-cols-2 order-last md:order-first justify-items-center p-10 bg-slate-700 text-white rounded-b-3xl rounded-tr-3xl text-[14px] md:text-[16px] '>
                                <div>
                                    Banana fiber processing introduces an innovative approach to harnessing the potential of banana plants. This involves extracting fibers from banana plant pseudostems through a meticulous process—harvesting mature plants, stripping outer layers to reveal the fibrous core, and mechanically extracting and cleaning the fibers. Treated for strength and durability, these banana fibers are utilized in textiles, handicrafts, and various eco-friendly products. 
                                    <br />
                                    <br />
                                    This method champions sustainability by repurposing agricultural waste, offering a viable raw materials alternative to plastics, in the production of eco-friendly products. Embracing banana fiber aligns with environmentally conscious practices, contributing to the responsible and renewable utilization of resources.
                                    In opting for these alternative materials, we not only eliminate our dependence on plastic but also actively support industries, also champion responsible recollection and recycling. Our Kenaf and Banana Fiber projects stand as a testament to our commitment to a more sustainable and eco-friendly future. We are open to working with like-minded organizations to accomplish these initiatives.
                                    
                                </div>
                                <img src="/images/partnershippicdown1.png" alt="" />
                            </div>
                    }
                        </div>
                :
                    <div className='grid gir-cols-1 md:grid-cols-2 justify-items-center  text-[14px] md:text-[16px] '>
                        <div>
                            We specialize in offering strategic advisory services designed to elevate the innovative capabilities of organizations. Our collaborative approach involves closely partnering with clients to pinpoint opportunities for innovation, streamline processes, and cultivate creativity to address business challenges effectively. Our primary objective is to nurture a culture of innovation within the organization by implementing robust strategies and harnessing cutting-edge technologies in IT solutions development, prototyping, market research, and market entry. This ensures that our clients not only remain competitive but also adapt seamlessly to dynamic business environments
                        </div>
                    <img src="/images/partnershippic2.png" alt="" className='w-[100%] md:w-[70%] justify-self-center ' />
            </div>
            }
        
        </div>
        <div >
            <Button asChild className={""}>
              <Link to={"/partnership"}>Partner with us</Link>
            </Button>
        </div>
    </SectionPadding>
  )
}

export default PartnershipSwitch