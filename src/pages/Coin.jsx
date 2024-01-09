import React from "react";

function Coin({ image, name, priceChange, price, volume }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="coin">
          <img className="" src={image} height={100} width={100} alt="crypto" />
          <h1 className="">{name}</h1>
          
        </div>

        <div className="coin-data">
          <p>₱{price}</p>
          <p>₱{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="text-red">{priceChange.toFixed(2)}</p>
          ) : (
            <p className="text-green">{priceChange.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
