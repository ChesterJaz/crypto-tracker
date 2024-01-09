import React from "react";

function Coin({ image, name, priceChange, price, volume, symbol }) {
  return (
    <div>
      <div className="flex justify-start items-center border-b">
        <div className="coin-row flex justify-center items-center p-10">
          <img className="" src={image} height={100} width={100} alt="crypto" />
          <h1 className="px-5">{name}</h1>
          
        </div>

        <div className="coin-data flex justify-between gap-10">
          <p className="flex">₱{price}</p>
          <p className="flex">₱{volume.toLocaleString()}</p>
          <p className="uppercase">{symbol}</p>
          {priceChange <= 0 ? (
            <p className="text-red-700">{priceChange.toFixed(2)}</p>
          ) : (
            <p className=" text-green-700">{priceChange.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
