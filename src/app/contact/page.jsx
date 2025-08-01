import React from 'react'
import ContactFrom from './ContactFrom'
import MapLocation from './MapLocation'
import ConatctSession from './ConatctSession'

const page = () => {
    return (
        <div className=''>
            <ContactFrom />
            <ConatctSession />
            <MapLocation />
        </div>
    )
}

export default page