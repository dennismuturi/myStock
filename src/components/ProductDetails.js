import React from "react"
import {useParams} from "react-router-dom"
import "../style.css"

function ProductDetails({allStocks}){
const params=useParams();
const stockToDisplay =allStocks.filter((stock)=> stock.id === params.id);
    return (
    <div>Product Details
        <div>
            {stockToDisplay.map((stock)=>{
                return (
                <div key={stock.id}>
                  <h1>{stock.name}</h1> 
                  <h2>{stock.description}</h2>
                  <h3>
                    <label>Quantity Remaining</label>
                    <span>{stock.qty}</span>
                  </h3>
                  <h3>
                    <label>Sold Today</label>
                    <span>{stock.sold}</span>
                  </h3>
                 
                </div> 
                )
            })
        }
        </div>
    </div>
           
    )
}

export default ProductDetails;