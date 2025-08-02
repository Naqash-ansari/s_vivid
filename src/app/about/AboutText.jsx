import Image from 'next/image'
import img from '../assets/about/b1.jpg'
import '../assets/about/about.css'
import SlotCounter from 'react-slot-counter';



const AboutText = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <Image width={550} height={500} className='rounded' src='/about1.png' alt='about' />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5 " >
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-amber-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-amber-600"><span className='mr-2'>Our</span>
                            Company
                            {/* <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                                
                            /> */}
                        </span>
                        </h2>
                        <p className="text-gray-700">
                            At <span className='text-amber-600 font-bold'>Vivid Sign</span>, we’re passionate about helping businesses grow with a unique blend of digital expertise and physical branding solutions. From creating stunning websites and managing social media to designing impactful signs and revitalizing your shop’s appearance — we do it all with creativity, precision, and purpose.

                            We offer <span className='text-amber-600 font-bold'>end-to-end services</span> including domain setup, merchant solutions, and custom graphics that enhance your online and offline presence. Our team is dedicated to delivering eye-catching branding, professional <span className='text-amber-600 font-bold'>print and packaging</span>, and practical tools like <span className='text-amber-600 font-bold'>business utilities</span> and <span className='text-amber-600 font-bold'>pavement signs</span> to support your everyday operations.

                            Whether you’re launching a new business or upgrading your brand, <span className='text-amber-600 font-bold'>Vivid Sign</span> is your all-in-one partner for turning ideas into lasting impressions.
                        </p>

                        {/* <div className="flex">
                            <SlotCounter
                                value="1234"
                                dummyCharacters={'Company'}
                                duration={2}
                            />
                            <SlotCounter
                                value="Company"
                                dummyCharacters={'Company'}
                                duration={2}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutText