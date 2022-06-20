import React from 'react'
import { REPORT_LIST } from './ReportsUtils'

function Reports() {
    return (
        <div className='pagePadding reports ' >
            {
                REPORT_LIST.map((item, i) => <>
                    <div className="reportImageWraper">
                        <span> <img src={item.image} alt="" />
                            <div className="reportTextArea ">
                                <h3> {item.count}{item.unit} </h3>
                                <p> {item.mission} </p>
                            </div></span>
                    </div>
                </>)
            }

        </div>
    )
}

export default Reports