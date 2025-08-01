'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ClipLoader } from 'react-spinners'
import { RxCross2 } from "react-icons/rx";


export default function EmailModal({ finalShopDesign }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [shopName, setShopName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!name || !shopName || !number || !email) {
            toast.error('Please fill all the fields.')
            return
        }

        if (!/^\d{11}$/.test(number)) {
            toast.error('Phone number must be exactly 11 digits.')
            return
        }

        toast.info('Sending your details...')

        try {
            const res = await fetch('http://localhost:3000/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, shopName, number, email, finalShopDesign }),
            })

            const data = await res.json()
            if (res.ok) {
                toast.success('Form submitted successfully!')
                setName('')
                setShopName('')
                setNumber('')
                setEmail('')
                setTimeout(() => {
                    setOpen(false)
                }, 5000)
            } else {
                toast.error(data.error || 'Something went wrong')
            }
        } catch (err) {
            toast.error('Error sending request')
        }

    }

    return (
        <>
            <div className="">
                <button
                    onClick={() => setOpen(true)}
                    className=" text-white bg-amber-600 hover:bg-amber-700 border-0 py-2 px-6 focus:outline-none rounded"
                >
                    Save & Continue
                </button>
            </div>

            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden p-5 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="w-full max-w-md mx-auto bg-white rounded-lg p-6 space-y-5"
                            >
                                {/* Name Field */}
                                <div className='flex justify-end w-full'>
                                    <RxCross2 className='text-2xl cursor-pointer'
                                        onClick={() => setOpen(false)}
                                    />

                                </div>
                                <h1 className='text-center text-stone-600 text-lg capitalize font-bold'>please enter your details</h1>
                                <div>
                                    <label className="block text-md text-stone-600  font-bold mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Shop Name Field */}
                                <div>
                                    <label className="block text-stone-600  font-bold mb-1">Shop Name</label>
                                    <input
                                        type="text"
                                        value={shopName}
                                        onChange={(e) => setShopName(e.target.value)}
                                        required
                                        placeholder="Enter your shop name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label className="block text-stone-600  font-bold mb-1">Phone Number</label>
                                    <input
                                        type="number"
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                        required
                                        placeholder="11-digit mobile number"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-stone-600  font-bold mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
                <ClipLoader className='mt-40' />
                <ToastContainer position="bottom-right" autoClose={6000} />
            </Dialog>

            {/* Toast Container */}
        </>
    )
}
