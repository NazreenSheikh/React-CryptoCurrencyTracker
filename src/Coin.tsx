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
        <div>
            <div>
                <div>
                    <img src={image} alt="Coin Image" />
                    <h1>
                        {name}
                    </h1>
                    <p>{symbol}</p>

                </div>
                <p>
                    ${price}
                </p>
                <p>
                    ${volume.toLocaleString()}
                </p>
                <p>
                    {priceChange.toFixed(2)}

                </p>
                <p>market-cap: ${marketcap.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default Coin
