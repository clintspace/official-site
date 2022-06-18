import React from 'react'

function ContainerHeader({ para, header }) {
    return (
        <div className="commonHeader">
            <span className='flex flex-col' >
                <h2 className='text-hero'>{header} </h2>
                <p className='   text-subPara' > {para} </p>
            </span >
        </div>
    )
}

export default ContainerHeader