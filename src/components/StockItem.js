import React from "react"
import {Link} from "react-router-dom"
import "../styles.css"

function StockItem ({stockId,name,description,sold,qty,price,total,deleteHandler,getStockData}){

  return (
           <tr>
              <td>{name}</td>
              <td>{description}</td>
              <td>{qty}</td>
              <td>{price}</td>
              <td>{total}</td>
              <td>
              <Link to={`/${stockId}`}> 
              <button>View</button>
             </Link>
             </td>
              <td>
                <button onClick={(e)=>getStockData({stockId,name,description,sold,qty,price,total})}>Update</button></td>
              <td>
              <button onClick={(e)=>deleteHandler(stockId)}>Delete</button>
              </td>
            </tr>
        
    
  )
}

export default StockItem;