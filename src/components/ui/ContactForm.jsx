import React, { useState } from 'react'
import { Button } from './button'
import { useForm } from 'react-hook-form'
import OverlayMessage from './OverlayMessage'



const ContactForm = () => {

    const [overlay, setOverlay] = useState(false)
    const {register, handleSubmit, formState} = useForm()
    const onSubmit = (data) => {
        console.log(data)
        setOverlay(true)
    }
    const formError = formState.errors

  return (
    <form 
    action="#" 
    className="space-y-8  "
    onSubmit={handleSubmit(onSubmit)}
    >
        <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
            <input 
            type="text" 
            id="subject" 
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " 
            placeholder="John Doe" 
            required
            {
                ...register("fullName", { required: true })
            }
             />
        </div>
        <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input 
            type="email" 
            id="email" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
            placeholder="name@wellness.com" 
            required 
            {
                ...register("email", {
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:'Please put in a valid email'
                    }
                })
            }
            />
            {formError.body && formError.body.type === "pattern" && <span className='errors'>Please put in a valid email</span>}
        </div>
        <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Message</label>
            <textarea 
            id="message" 
            rows="6" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " 
            placeholder="Leave a Message..."
            {
                ...register("message", { required: true })
            }
            ></textarea>
        </div>
        <Button asChild className={"flex"}>
            {/* <p>Submit</p> */}
            <input type='submit'/>
        </Button>
        {
            overlay ? 
                <OverlayMessage />
                // You can setup as dynamic component later
            : 

            null
        }
        
    </form>
  )
}

export default ContactForm