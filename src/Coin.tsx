import React from 'react'
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
interface coinProps{
    name: string;
    key: string;
    image: string;
    marketcap: number;
    volume: number;
    priceChange: number;
    price: number;
    symbol: string;

}
const Coin= ({image, name, symbol, volume,priceChange, marketcap,price}:coinProps) => {

    return (
        <div >
            <div  className="flex text-purple-900 text-xl h-52 mt-10 mb-5 ml-1">
                    <img src={image} alt="Coin Image" className="w-52 h-52  "/>
                    <p className="ml-14 mt-20">{name}</p>
                    <div className="container flex justify-between ml-28 mt-20">
                        <p>{symbol}</p>
                        <p>${price}</p>
                        <p>${volume.toLocaleString()}</p>
                        {priceChange <0?(
                            <p className="text-4xl text-red-600 "><TiArrowSortedDown/>{priceChange.toFixed(2)}%</p>
                        ):(<p className="text-4xl text-green-600"><TiArrowSortedUp/>{priceChange.toFixed(2)}%</p>)}
                        <p className="mr-4 ">${marketcap.toLocaleString()}</p>
                    </div>
            </div>
        </div>
    )
}

export default Coin
