import React from "react"
import {Link} from "react-router-dom"
import "../styles.css"

function StockItem ({stockId,name,description,sold,qty,price,total,sales,initialStock,deleteHandler,getStockData}){

  return (
          
           <tr>
              <td>{name}</td>
              <td>{description}</td>
              <td>{initialStock}</td>
              <td>{qty}</td>
              <td>
               {sales.map((sale) =>sale.sold).reduce(function(prevValue,currentValue){
                return prevValue+currentValue
                })}
              </td>
              
              <td>{price}</td>
              <td>{total}</td>
              <td>
              <Link to={`/${stockId}`}> 
              <button>View</button>
             </Link>
             </td>
              <td>
                <button onClick={(e)=>getStockData({stockId,name,description,sold,qty,price,total,sales})}>Update</button></td>
              <td>
              <button onClick={(e)=>deleteHandler(stockId)}>Delete</button>
              </td>
            </tr>
        
    
  )
}

export default StockItem;