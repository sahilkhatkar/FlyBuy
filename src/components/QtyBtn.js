import React, { useState } from "react";
import "./css/QtyBtn.css"

export default function QtyBtn() {
    let quantity = document.getElementsByClassName("qty")
    const [qty, setQty] = useState(1)
    
    return (
        <div className="quantity buttons_added">
      <input type="button" value="-" className="minus" onClick={()=>{
          if(qty > 1) setQty(parseInt(quantity[0].attributes[10].nodeValue) - 1)
        }}/>
      <input
        type="number"
        step="1"
        min="1"
        max="5"
        name="quantity"
        value={qty}
        title="Qty"
        className="input-text qty text"
        size="4"
        pattern=""
        inputmode=""
        />
      <input type="button" value="+" className="plus" onClick={()=>{
        // here 5 is the maximum quantity.
        if(qty < 5) setQty(parseInt(quantity[0].attributes[10].nodeValue) + 1)
      }}/>
    </div>
  );
}
