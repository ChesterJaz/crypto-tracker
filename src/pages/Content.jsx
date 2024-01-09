import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import Loader from "react-js-loader";

function Content() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const getCoins = async () => {
    setLoading(true);
    const response = await axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCoins();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-app bg-gray-700 h-screen text-white">
      <div className="flex justify-center items-center py-10">
        <h1 className="px-2">Search coin: </h1>
        <form>
          <input
            type="text"
            onChange={handleChange}
            className=" bg-gray-100 border-2 rounded-md"
          />
        </form>
      </div>

      {loading ? (
        <Loader size={100} />
      ) : (
        filterCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              volume={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_24h}
            />
          );
        })
      )}

     
     
    </div>
  );
}

export default Content;
