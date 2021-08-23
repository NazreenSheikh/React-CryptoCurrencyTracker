import axios from 'axios'
import React, { useEffect, useRef, useState }  from 'react'
import Coin from './Coin';
import Property from './Property';

const App = () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    const [coins, setCoins] = useState([])
const [search, setSearch] = useState("")

    useEffect(() => {
      axios.get(url).then(
          response=>{
          console.log(response.data)
          setCoins(response.data)
      }).catch(err => console.log(err))
    }, [])

    const handleSearch=(e)=>{
setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin=>{

        return coin.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
     <div>
         <nav className=" flex bg-purple-200  h-12">
         <h1 className="mt-2 flex-none italic font-bold text-2xl ml-10 text-purple-900">
                 Crypto Currency Tracker
             </h1>
             <div className="justify-end container flex">
                 <h1 className="mx-5 text-black ">
                     Search Crypto-Currency
                 </h1>
                <input type="text" className="bg-purple-900 placeholder-white text-white pl-1" placeholder="Search" value={search} onChange={handleSearch}/>
             </div>
         </nav>
         <Property/>
         {filteredCoins.map(coin=>{

             return (
                 <Coin key={coin.id} image={coin.image} name={coin.name} price={coin.current_price} symbol={coin.symbol} marketcap={coin.total_volume} volume={coin.market_cap} priceChange={coin.price_change_percentage_24h}/>
             )
         })}

     </div>

    )
}

export default App
