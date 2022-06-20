import React, { useRef } from 'react'
import { LEFT_ICON, RIGHT_ICON } from '../Team/TeamUtils';
import { CLIENT_LIST_1, CLIENT_LIST_2, CLIENT_PARAGRAPH } from './clientsUtils';

function Clients({ smallScreen }) {

    const card = useRef();
    const scroll = (scrollOffset) => {
        card.current.scrollLeft += scrollOffset;

    };



    const makeTeamCard = (detailsArray) => (detailsArray || []).map((item, i) => <a href={item.link}>
        <div className="clientCard" id={item?.id} key={i} >
            <div className="clientCardImageRow">  <img src={item.image} alt="" /></div>
            <hr style={{ width: "80%", margin: "20px auto§" }} />
            <p> {item.name} </p>
        </div>
    </a>)



    return (
        <div className='' >

            <div className='bg-primary_white   pagePadding clients ' id='clients'>


                <div className="clientCardWraper" ref={card}>
                    <div className="cardRow">
                        {makeTeamCard(CLIENT_LIST_1)}
                    </div>

                    <div className="cardRow">
                        {makeTeamCard(CLIENT_LIST_2)}
                    </div>

                </div>


                <div className="rightClient">
                    <div className="" >
                        <h2> Happy Customers </h2>
                        <p> {CLIENT_PARAGRAPH}  </p>
                    </div>
                    {
                        smallScreen && <div className="buttonRow">
                            <button onClick={() => scroll(300)}> {LEFT_ICON}  </button>
                            <button onClick={() => scroll(-300)} > {RIGHT_ICON} </button>
                        </div>

                    }
                </div>


            </div >
            {
                !smallScreen && <div className="buttonRow bottomButtonRow">
                    <button onClick={() => scroll(300)}> {LEFT_ICON}  </button>
                    <button onClick={() => scroll(-300)} > {RIGHT_ICON} </button>
                </div>

            }

        </div>
    )
}

export default Clients