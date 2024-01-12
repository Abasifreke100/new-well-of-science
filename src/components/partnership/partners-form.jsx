import { Button } from '../ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ErrorIcon from './assets/error-icon';
import React, { useState } from 'react';
import Handshake from './assets/handshake.svg';
import { m } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../../config/site';

const FormSchema = z.object({
  nameOfCompany: z
    .string({ required_error: 'Please enter name of company' })
    .min(1, { message: 'Please enter the company name' }),
  email: z
    .string({ required_error: 'Please enter email address' })
    .email({ message: 'Invalid email address' }),
  phoneNumber: z
    .string({ required_error: 'Please enter phone number' })
    .length(11, { message: 'Please enter a valid phone number' }),
  message: z
    .string({ required_error: 'Please enter message' })
    .min(1, { message: 'Please enter a message' })
});

export default function PartnersForm() {
  const [status, setStatus] = useState('idle');
  const formRef = useRef();

  const { public_key, service_id } = siteConfig.form;
  const template_id = 'template_83etf5m';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(FormSchema)
  });
  const onSubmit = () => {
    setStatus('pending');

    emailjs.sendForm(service_id, template_id, formRef.current, public_key).then(
      () => {
        setStatus('done');
      },
      () => {
        setStatus('idle');
      }
    );
  };

  return (
    <>
      {status === 'done' ? (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/70"
            onClick={() => setStatus('idle')}
          />
          <m.div
            initial={{ opacity: 0, scale: 0.5, y: '-50%', x: '-50%' }}
            animate={{
              opacity: 1,
              scale: 1,
              y: '-50%',
              x: '-50%',
              transition: { duration: 0.5 }
            }}
            className="fixed w-full h-[492px] md:w-[584px] rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 px-8 md:px-[70px] py-[72px] overflow-clip"
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full ">
              <div className="relative z-50 mb-4">
                <img src={Handshake} alt="successful" className="mx-auto" />
              </div>

              <div className="relative z-50 mb-8 text-center">
                <p className="font-semibold font-gen_sans text-dark_text text-2xl md:text-[40px] md:leading-[125%] mb-6">
                  Thank you for partnership request.
                </p>

                <p className="text-base font-normal font-inter text-normal_text">
                  We&apos;ll give you a call or send a mail within 48 hours.
                </p>
              </div>

              <Button
                size={'lg'}
                className={'mx-auto z-50'}
                onClick={() => {
                  setStatus('idle');
                  formRef?.current?.reset();
                }}
              >
                Back to home
              </Button>

              <svg
                width="420"
                height="492"
                viewBox="0 0 420 492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-[71px] z-40"
              >
                <path
                  opacity="0.25"
                  d="M310.445 35.2429C401.916 18.8779 444.328 -88.7496 401.327 -219.438C346.23 -248.433 230.837 -307.314 210.034 -310.885C184.031 -315.348 130.159 -295.286 -16.1851 -234.11C-162.529 -172.933 -182.559 -134.038 -287.628 -67.4055C-392.697 -0.772963 -338.503 118.838 -340.369 147.825C-342.235 176.812 -300.241 318.617 -268.887 376.1L-125.181 639.565C-112.639 662.559 19.6742 775.505 84.2631 829.105C68.0521 802.985 65.6744 708.875 185.852 541.391C349.271 430.501 180.221 504.062 64.3543 318.643C-51.5123 133.224 79.2507 189.317 143.198 58.0973C194.357 -46.8784 227.12 29.8698 310.445 35.2429Z"
                  fill="#D9D9D9"
                  stroke="#D9D9D9"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </m.div>
        </>
      ) : null}

      <div className="w-full bg-white rounded-2xl min-h-[20rem]  md:w-[532px] absolute top-96 md:top-[330px] lg:top-[120px] left-1/2 -translate-x-1/2 lg:-translate-x-24 lg:right-0 lg:left-auto py-6 px-4 md:px-8 shadow-xl z-30">
        <div className="mb-12 ">
          <h1 className="font-gen_sans font-semibold text-[32px] text-dark_text relative md:text-[40px] w-fit h-fit ">
            <span>Partners form</span>
            <svg
              width="65"
              height="100"
              viewBox="0 0 65 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -translate-y-1/2 top-1/2 right-12"
            >
              <path
                d="M63.3438 30.2119C54.4191 20.1057 29.6562 6.1132 2.00165 30.9934"
                stroke="#121212"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M63.3438 68.9829C54.4191 79.0892 29.6562 93.0816 2.00165 68.2015"
                stroke="#121212"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className="text-[14px] font-normal font-inter text-normal_text lg:text-[16px] leading-10">
            Let&apos;s build a sustainable future together.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor={'name'}>Name of company</Label>
              <Input
                type="text"
                id="nameOfCompany"
                name="nameOfCompany"
                placeholder="Name of company"
                {...register('nameOfCompany')}
                isError={errors.name?.message}
              />
              {errors.nameOfCompany?.message && (
                <div className="flex items-center gap-2 text-[#FF0000]">
                  <ErrorIcon /> {errors.nameOfCompany?.message}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor={'email'}>Email Address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                {...register('email')}
                isError={errors.email?.message}
              />
              {errors.email?.message && (
                <div className="flex items-center gap-2 text-[#FF0000]">
                  <ErrorIcon /> {errors.email?.message}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor={'phone'}>Phone Number</Label>
              <Input
                type="number"
                id="phone"
                name="phoneNumber"
                placeholder="1234567890"
                {...register('phoneNumber')}
                isError={errors.phoneNumber?.message}
              />
              {errors.phoneNumber?.message && (
                <div className="flex items-center gap-2 text-[#FF0000]">
                  <ErrorIcon /> {errors.phoneNumber?.message}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <Label htmlFor={'message'}>Message</Label>
              <textarea
                name="message"
                id="message"
                className={` w-full empty:bg-[#F3F3F3] border border-[#D4D4D4] rounded-lg placeholder:text-[#8A8A8A] p-3 h-48 outline-[#8A8A8A]`}
                {...register('message')}
              />
              {errors.message?.message && (
                <div className="flex items-center gap-2 text-[#FF0000]">
                  <ErrorIcon /> {errors.message?.message}
                </div>
              )}
            </div>
          </div>

          <Button type="submit" disabled={status === 'pending'}>
            {status === 'pending'
              ? 'Submitting...'
              : status === 'done'
              ? 'Submitted'
              : 'Submit'}
          </Button>
        </form>
      </div>
    </>
  );
}

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-normal font-inter lg:text-base"
    >
      {children}
    </label>
  );
};

const Input = React.forwardRef(({ type = 'text', isError, ...props }, ref) => {
  return (
    <input
      className={`h-[52px] w-full empty:bg-[#F3F3F3] border border-[#D4D4D4] rounded-lg placeholder:text-[#8A8A8A] px-3  ${
        isError ? 'outline-[#FF0000]' : 'outline-[#8A8A8A]'
      }`}
      type={type}
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = 'Input';
