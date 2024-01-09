import React from "react";

function Coin({image, name, symbol, price, volume}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>

        <div className="coin-data">
            <p>₱{price}</p>
            <p>₱{volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
