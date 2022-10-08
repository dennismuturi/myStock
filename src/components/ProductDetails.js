import React from "react"
import {useParams} from "react-router-dom"
import "../styles.css"

function ProductDetails({allStocks}){
const params=useParams();
const stockToDisplay =allStocks.filter((stock)=> stock.id === params.id);
    return (
    <div className="wrapper">
      {stockToDisplay.map((stock)=>{
                return (
                <div key={stock.id}>
                  <h1 style={{color:'red'}}>{stock.name}</h1> 
                  <p>
                    <label style={{color:'green'}}>Quantity Remaining</label>
                    <span style={{color:'red'}}>{stock.qty}</span>
                  </p>
                  <p>
                    <label style={{color:'green'}}>Sold Today</label>
                    <span style={{color:'red'}}>{stock.sold}</span>
                  </p>
                  <table>
                    <tbody>
                      <tr>
                      <th>Sold</th>
                      <th>Sell Price</th>
                      <th>Total</th>
                      <th>Date</th>
                    </tr>
                  
                    {
                      stock.sales.map((sale,index)=> (
                         <tr>
                         <td>{sale.sold}</td>
                         <td>{sale.sellPrice}</td>
                         <td></td>
                         <td></td>
                         </tr>
                        )
                      )
                    }
                   </tbody>
                  </table>


                 
                </div> 
                )
            })
        }
      </div>
    
           
    )
}

export default ProductDetails;