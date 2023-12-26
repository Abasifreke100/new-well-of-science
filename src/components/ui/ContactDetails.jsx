import React, { useState } from 'react'
import SectionPadding from './SectionPadding'
import { Mail, MapPin, PhoneCallIcon } from 'lucide-react'
import { Button } from './button'

const ContactDetails = () => {

    const [overlay, setOverlay] = useState(false)



  return (
    <SectionPadding>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10  my-10  '>
            <div className='relative'>
                <h1 className='font-gen_sans font-semibold text-[20px] sm:text-[24px] md:text-[32px]  my-5 '> Hi👋, drop us a message</h1>
                <p clas>Nothing inspires us better than a message from those we seek to serve. Whenever you reach out to us, you fuel our drive.</p>
                <div className='flex flex-row gap-6 my-6 '>
                    <div className='bg-green_four p-3 rounded-full self-center '>
                        <MapPin color='#fff' size={30} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h5>Address</h5>
                        <p>89 Edet Akpan Avenue, Four Lanes, Uyo</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 my-6 '>
                    <div className='bg-green_four p-3 rounded-full '>
                        <Mail color='#fff' size={30} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h5>Email us</h5>
                        <p>info@wellofscience.com</p>
                    </div>
                </div>
                <div className='flex flex-row gap-6 my-6 '>
                    <div className='bg-green_four p-3 rounded-full '>
                        <PhoneCallIcon color='#fff' size={30} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h5>Call us</h5>
                        <p>+2349130275027</p>
                    </div>
                </div>
            <img src="/images/vector38.png" className=' hidden md:block absolute  top-10 -right-10 -z-10 ' alt="" />
            </div>
            <div>
                {/* Form */}
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="John Doe" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Address</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 k:placeholder-gray-400 " placeholder="name@wellness.com" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a Message..."></textarea>
                        </div>
                        <Button asChild className={"hidden md:flex"}>
                            <p>Submit</p>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </SectionPadding>
  )
}

export default ContactDetails