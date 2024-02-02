import SectionPadding from './SectionPadding'
import { Mail, MapPin, PhoneCallIcon } from 'lucide-react'
import ContactForm from './ContactForm'

const ContactDetails = () => {




  return (
    <SectionPadding>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10  my-10  '>
            <div className='relative'>
                <h1 className='font-gen_sans font-semibold text-[20px] sm:text-[24px] md:text-[32px]  my-5 '> Hi👋, drop us a message</h1>
                <p>Nothing inspires us better than a message from those we seek to serve. Whenever you reach out to us, you fuel our drive.</p>
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
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-[url(/images/lines.png)] ">
                    <ContactForm />
                </div>
            </div>
        </div>
    </SectionPadding>
  )
}

export default ContactDetails