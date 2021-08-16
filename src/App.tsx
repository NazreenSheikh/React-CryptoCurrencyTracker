import axios from 'axios'
import React, { useEffect, useRef, useState }  from 'react'
import Coin from './Coin';

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
         <div>
             <h1>
                 Search Crypto Currency
             </h1>
             <div>
                     <input type="text" placeholder="Search" value={search} onChange={handleSearch}/>
      </div>

         </div>
         {filteredCoins.map(coin=>{

             return (
                 <Coin key={coin.id} image={coin.image} name={coin.name} price={coin.current_price} symbol={coin.symbol} marketcap={coin.total_volume} volume={coin.market_cap} priceChange={coin.price_change_percentage_24h}/>
             )
         })}

     </div>

    )
}

export default App
