import React from 'react'

const Property = () => {
    return (
        <div className="flex bg-purple-200  p-4  text-purple-900 h-16 border-t-2 border-black ">
           <div className="w-1/4 pl-20">
               <h1 >image</h1>
           </div>
            <div className="container flex  text-justify justify-between  ">
                <h1>name</h1>
                <h1 >symbol</h1>
                <h1>price</h1>
                <h1 >volume</h1>
                <h1>diff</h1>
                <h1 >market-cap</h1>
            </div>
        </div>
    )
}

export default Property
