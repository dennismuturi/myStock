import React from "react"
import {Link} from "react-router-dom"
import "../styles.css"

function StockItem ({stockId,name,description,qty,price,total,deleteHandler,getStockData}){

  return (
           <tr>
              <td>{name}</td>
              <td>{description}</td>
              <td>{qty}</td>
              <td>{price}/=</td>
              <td>{total}/=</td>
              <td>
                <button onClick={(e)=>getStockData({stockId,name,description,qty,price,total})}>Edit</button></td>
              <td>
              <button onClick={(e)=>deleteHandler(stockId)}>Delete</button>
              </td>
            </tr>
        
    
  )
}

export default StockItem;