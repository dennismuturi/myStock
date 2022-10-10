import React from "react"
import {Link} from "react-router-dom"
import "../styles.css"

function StockItem ({stockId,name,description,sold,qty,price,total,sales,initialStock,deleteHandler,getStockData}){

  return (
          
           <tr>
              <td style={{background: 'darkgrey',color:'darkgreen'}}><b>{name}</b></td>
              <td style={{background: 'lightgrey',color:'darkgreen'}}>{description}</td>
              <td style={{background: 'darkgreen',color:'white'}}>{initialStock}</td>
              <td style={{background: 'green',color:'white'}}>{qty}</td>
              <td style={{background: 'red',color:'white'}}>
              {Array.isArray(sales) ? sales.map((sale) =>sale.sold).reduce(function(prevValue,currentValue){
                return prevValue+currentValue
                }) : <h1>Data is currently unavailble, We are working to resolve it</h1>}
              </td>
              
              
              <td>
              <Link to={`/${stockId}`}> 
              <button style={{background: 'orange',color:'white'}}>View</button>
             </Link>
             <button style={{background: 'green',color:'white'}} onClick={(e)=>getStockData({stockId,name,description,sold,qty,price,total,sales})}>Update</button>
             
              <button style={{background: 'red',color:'white'}}onClick={(e)=>deleteHandler(stockId)}>Delete</button>
              </td>
            </tr>
        
    
  )
}

export default StockItem;