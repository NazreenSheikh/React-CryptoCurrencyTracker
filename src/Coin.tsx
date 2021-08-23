import React from 'react'
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
            <div  className="flex text-purple-900  h-52  ">
                    <img src={image} alt="Coin Image" className="w-52 h-52 "/>
                    <h1 className="ml-14">{name}</h1>
                    <div className="container flex justify-between ml-28 ">
                        <p>{symbol}</p>
                        <p>${price}</p>
                        <p>${volume.toLocaleString()}</p>
                        <p>{priceChange.toFixed(2)}%</p>
                        <p>${marketcap.toLocaleString()}</p>
                    </div>
            </div>
        </div>
    )
}

export default Coin
