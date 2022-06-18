import React from 'react'
import ContainerHeader from '../common/ContainerHeader'
import { SERVICES_ITEMS, SERVICES_PARAGRAPH } from './servicesUtils'
// import { code } from "../../../public/code.png"


function Services() {


    const getServiceItems = () => SERVICES_ITEMS.map(item => <div className='servicesItems' >
        <img src={item.image} alt="" />
        <h5> {item.heading} </h5>
        <p> {item.about} </p>

    </div>)

    return (
        <div className='bg-primary_white services  pagePadding ' id='services'>

            <ContainerHeader para={SERVICES_PARAGRAPH} header="Out Services" />

            <div className=" servicesListWraper ">

                {
                    getServiceItems()
                }

            </div>


        </div>
    )
}

export default Services 