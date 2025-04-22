'use client'

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import contactimg from '@/public/assets/contact.png';
import FadeInSection from '@/components/FadeInSection';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactFormEmail } from '@/app/actions/sendEmail';

// Define Zod schema for form validation
const FormSchema = z.object({
  name: z.string().min(3, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, "Subject is required").max(80, "Write under 80 Characters!"),
  message: z.string().min(3, 'Message is required'),
});

type FormData = z.infer<typeof FormSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const [submissionStatus, setSubmissionStatus] = React.useState<{
    success: boolean;
    message?: string;
  } | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmissionStatus(null);

    // Create FormData for server action
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);

    const result = await sendContactFormEmail(formData);

    if (result.success) {
      setSubmissionStatus({ success: true });
      reset(); // Clear form fields
    } else {
      setSubmissionStatus({
        success: false,
        message: 'Failed to send message, Try Again!!!',
      });
      setError('root', { message: result.error });
    }
  };

  return (
    <FadeInSection>
      <section className="max-w-7xl mx-auto text-gray-400 body-font relative px-4 py-24">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 w-full opacity-90 rounded-lg overflow-hidden px-5 py-10 bg-gradient-to-br to-[#1c1f22] from-[#16161f]">
            <Image
              src={contactimg}
              alt="contact"
              className="rounded-md mb-5 object-cover w-full h-52 md:h-64"
            />
            <h2 className="font-semibold text-text text-2xl sm:text-3xl">
              BURRAQ DIGITS
            </h2>
            <div className="mt-4 space-y-2">
              <div>
                <h2 className="font-semibold text-text text-xs">ADDRESS</h2>
                <p className="mt-1">Admin, Near Osam Masjid, A-146, Block 8 admin society, Karachi, Pakistan</p>
              </div>
              <div>
                <h2 className="title-font font-semibold text-text text-xs">
                  EMAIL
                </h2>
                <Link
                  href="mailto:contact@burraqdigits.com"
                  className="text-accent leading-relaxed"
                >
                  contact@burraqdigits.com
                </Link>
              </div>
              <div>
                <h2 className="title-font font-semibold text-text text-xs">
                  PHONE
                </h2>
                <Link href={'tel:+923202019118'}>
                  <p className="leading-relaxed">+923202019118</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full bg-background flex flex-col md:ml-auto mt-8 md:mt-0 font-montserrat">
            <h2 className="font-semibold text-text text-2xl sm:text-3xl">
              LET&apos;S TALK
            </h2>
            <p className="mt-1 mb-6 text-sm">
              We are here to help you. Let us know how we can assist you.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  NAME
                </label>
                <input
                  {...register('name')}
                  id="name"
                  className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  EMAIL
                </label>
                <input
                  {...register('email')}
                  id="email"
                  className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-gray-400"
                >
                  SUBJECT
                </label>
                <input
                  {...register('subject')}
                  id="subject"
                  className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  MESSAGE
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  className="w-full shadow-inner shadow-zinc-900 bg-zinc-800 rounded border border-gray-900 focus:border-accent focus:ring-1 h-36 text-base outline-none text-gray-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center text-center justify-center text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-900 py-4 px-8 rounded transition-all duration-300 transform shadow-lg shadow-accent/20 text-md font-semibold"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
              {submissionStatus?.success && (
                <p className="text-green-500 text-sm mt-4 text-center">
                  Your message was sent successfully! We&apos;ll get back to you soon.
                </p>
              )}
              {submissionStatus && !submissionStatus.success && (
                <p className="text-red-500 text-sm mt-4 text-center">
                  {submissionStatus.message}
                </p>
              )}
            </form>
            <p className="font-poppins text-xs text-center text-gray-500 mt-5">
              Send us a message, and we&apos;ll contact you shortly.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;