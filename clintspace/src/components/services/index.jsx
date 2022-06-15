import React from 'react'
import { SERVICES_ITEMS, SERVICES_PARAGRAPH } from './servicesUtils'
// import { code } from "../../../public/code.png"


function Services() {


    const getServiceItems = () => SERVICES_ITEMS.map(item => <div className='servicesItems' >
        <img src={item.image} alt="" />
        <h5> {item.heading} </h5>
        <p> {item.about} </p>

    </div>)

    return (
        <div className='bg-primary_white services  '>

            <span className='flex flex-col' >
                <h2 className='text-hero'> Our Services</h2>
                <p className='  text-subPara text-subPara' > {SERVICES_PARAGRAPH} </p>
            </span >

            <div className=" servicesListWraper ">

                {
                    getServiceItems()
                }

            </div>


        </div>
    )
}

export default Services 