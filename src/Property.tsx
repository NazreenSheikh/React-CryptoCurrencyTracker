import React from 'react'

const Property = () => {
    return (
        <div >
            <div  className="flex bg-purple-200 text-purple-900 text-xl h-20 pt-6 ">
                    <p  className="ml-24 ">Image</p>
                    <p className="ml-28 ">name</p>
                    {/* <div className="container flex justify-between ml-24 "> */}
                        <p className="ml-24 ">symbol</p>
                        <p className="ml-20 ">price</p>
                        <p className="ml-32 ">volume</p>
                        <p className="ml-36 ">rate</p>
                        <p className="ml-32 ">marketcap</p>
                    {/* </div> */}
            </div>
        </div>

    )
}

export default Property
