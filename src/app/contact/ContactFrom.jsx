'use client'

import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import Image from 'next/image'
import img from '../assets/about/contact_img1.gif'

const ContactForm = () => {
    const [agreed, setAgreed] = useState(false)

    return (
        <div className="px-6 pt-16 mt-14 sm:pt-24 lg:pt-8 mx-auto max-w-7xl  ">
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
                    </div>
                    <form action="#" method="POST" className="mx-auto mt-10 max-w-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First name</label>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="mt-2 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 border focus:border-amber-600 outline-amber-600"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last name</label>
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="mt-2 block w-full rounded-md border-gray-300 outline-amber-600 px-3.5 py-2 text-base text-gray-900 border focus:border-amber-600 focus:ring-amber-600"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-2 block w-full rounded-md border-gray-300 outline-amber-600 px-3.5 py-2 text-base text-gray-900 border focus:border-amber-600 focus:ring-amber-600"
                            />
                        </div>

                        <div className="mt-6">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-2 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base outline-amber-600 text-gray-900 border focus:border-amber-600 focus:ring-amber-600"
                            />
                        </div>

                        <Field className="flex items-center gap-x-4 mt-6">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${agreed ? 'bg-amber-600' : 'bg-gray-300'
                                    }`}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${agreed ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                />
                            </Switch>
                            <Label className="text-sm text-gray-600">
                                By selecting this, you agree to our{' '}
                                <a href="#" className="font-semibold text-amber-600">privacy policy</a>.
                            </Label>
                        </Field>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="w-full rounded-md bg-amber-600 px-4 py-2.5 text-white font-semibold shadow-md border hover:border-dashed hover:border-amber-600 hover:bg-white hover:text-amber-600 transition"
                            >
                                Let's Talk
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
