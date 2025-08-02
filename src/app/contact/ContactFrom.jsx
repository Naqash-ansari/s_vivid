'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Image from 'next/image'
import img from '../assets/about/contact_img1.gif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Validation schema using yup
const schema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
    agreed: yup.bool().oneOf([true], 'You must agree to the privacy policy'),
}).required()

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false)

    // react-hook-form setup with yup resolver
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            agreed: false,
        },
    })


    const onSubmit = async (data) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();

            if (!res.ok) {
                toast.error(result.error || 'Failed to send message');
                return;
            }

            toast.success('Message sent successfully!');
            reset();
        } catch (err) {
            toast.error('Error sending message, please try again later.');
        }
    };



    return (
        <div className="px-6 pt-16 mt-14 sm:pt-24 lg:pt-8 mx-auto max-w-7xl">
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image */}
                <div className="w-full">
                    <Image
                        width={600}
                        height={400}
                        src={img}
                        alt="Contact Illustration"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="isolate border border-dashed border-amber-600 rounded-2xl p-8 hover:shadow-2xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Contact Sales</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Let’s discuss how we can help you. Fill out the form and we will get in touch.
                        </p>
                        {submitted && (
                            <p className="mt-4 text-green-600 font-semibold">
                                Thank you! Your message has been received.
                            </p>
                        )}
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-xl" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    {...register('firstName')}
                                    type="text"
                                    autoComplete="given-name"
                                    className={`mt-2 block w-full rounded-md px-3.5 py-2 text-base border ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-amber-600 focus:border-amber-600`}
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    {...register('lastName')}
                                    type="text"
                                    autoComplete="family-name"
                                    className={`mt-2 block w-full rounded-md px-3.5 py-2 text-base border ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                                        } focus:outline-amber-600 focus:border-amber-600`}
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                                Email
                            </label>
                            <input
                                id="email"
                                {...register('email')}
                                type="email"
                                autoComplete="email"
                                className={`mt-2 block w-full rounded-md px-3.5 py-2 text-base border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-amber-600 focus:border-amber-600`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register('message')}
                                rows={4}
                                className={`mt-2 block w-full rounded-md px-3.5 py-2 text-base border ${errors.message ? 'border-red-500' : 'border-gray-300'
                                    } focus:outline-amber-600 focus:border-amber-600`}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                            )}
                        </div>

                        <div className="flex items-center gap-x-4 mt-6">
                            <input
                                type="checkbox"
                                id="agreed"
                                {...register('agreed')}
                                className={`h-6 w-6 rounded border-gray-300 focus:ring-amber-600 ${errors.agreed ? 'border-red-500' : ''
                                    }`}
                            />
                            <label htmlFor="agreed" className="text-sm text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-amber-600">
                                    privacy policy
                                </a>
                                .
                            </label>
                        </div>
                        {errors.agreed && (
                            <p className="mt-1 text-sm text-red-600">{errors.agreed.message}</p>
                        )}

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-md bg-amber-600 px-4 py-2.5 text-white font-semibold shadow-md border hover:border-dashed hover:border-amber-600 hover:bg-white hover:text-amber-600 transition disabled:opacity-50"
                            >
                                {isSubmitting ? 'Submitting...' : "Let's Talk"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
