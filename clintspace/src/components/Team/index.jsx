import React, { useRef } from 'react'
import { LEFT_ICON, RIGHT_ICON, TEAM_MEMBERS_DETAILS } from './TeamUtils'


function TeamMembers({ smallScreen }) {




    const cards = useRef();
    const scroll = (scrollOffset) => {
        cards.current.scrollLeft += scrollOffset;

    };


    const makeTeamCard = () => TEAM_MEMBERS_DETAILS.map(item => <>
        <div className="card" id={item?.id} >
            <div className="imgRow">  <img src={item.image} alt="" /></div>
            <h4> {item.name} </h4>
            <p > {item.positoin} </p>
            <a href={item.socialMediaLink}> {item.socailMediaIcon} </a>
        </div>

    </>)






    return (
        <div className='bg-primary_white   pagePadding team ' id='team' >
            <div className="left">
                <div className="heading">
                    <h2>Meet Our Creative Team </h2>
                    <p>Our Creative Team, Is Your Creative Team ...!</p>
                </div>
                {
                    smallScreen && <div className="buttonRow">
                        <button onClick={() => scroll(300)}> {LEFT_ICON}  </button>
                        <button onClick={() => scroll(-300)} > {RIGHT_ICON} </button>
                    </div>

                }
            </div>

            <div className="right" ref={cards}>
                {makeTeamCard()}
            </div>

            {
                !smallScreen && <div className="buttonRow bottomButtonRow">
                    <button onClick={() => scroll(300)}> {LEFT_ICON}  </button>
                    <button onClick={() => scroll(-300)} > {RIGHT_ICON} </button>
                </div>

            }
        </div >
    )
}

export default TeamMembers