import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import OverlayMessage from './OverlayMessage';
import { Button } from './button';
import { siteConfig } from '../../config/site';

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const { register, handleSubmit, formState } = useForm();

  const formRef = useRef();

  const { public_key, service_id } = siteConfig.form;
  const template_id = 'template_r7bahqr';

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
  const formError = formState.errors;

  return (
    <form
      ref={formRef}
      className="space-y-8 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Full Name
        </label>
        <input
          type="text"
          id="subject"
          name="full_name"
          className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 "
          placeholder="John Doe"
          required
          {...register('full_name', { required: true })}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  "
          placeholder="name@wellness.com"
          required
          {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Please put in a valid email'
            }
          })}
        />
        {formError.body && formError.body.type === 'pattern' && (
          <span className="errors">Please put in a valid email</span>
        )}
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Message
        </label>
        <textarea
          id="message"
          rows="6"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
          placeholder="Leave a Message..."
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <Button type="submit" disabled={status === 'pending'}>
        {status === 'pending'
          ? 'Submitting...'
          : status === 'done'
          ? 'Submitted'
          : 'Submit'}
      </Button>
      {status === 'done' ? <OverlayMessage /> : null}
    </form>
  );
};

export default ContactForm;
