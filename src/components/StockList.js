import React from 'react';
import StockItem from './StockItem';


import {Link} from "react-router-dom"


function StockList({ stocks,deleteHandler, getStockData }) {
  const sampledata =[
    {
        id:1,
        name:"Duracoat",
        description:"Paint",
        qty:5,
        price:100,
        total:500
    },
    {
        id:2,
        name:"Mabati",
        description:"Iron sheets",
        qty:10,
        price:1000,
        total:10000
    },
];

  return (
    <table >
      <tbody>
        <tr>
          <th>
            <h3 >Name</h3>
          </th>
          <th>
            <h3 >Category</h3>
          </th>
      
          <th>
            <h3 >Initial Stock</h3>
          </th>
          <th>
            <h3 style={{color:'green'}}>Remaining Stock</h3>
          </th>
          <th>
            <h3 style={{color:'green'}}>Total Sold</h3>
          </th>
          <th>
            <h3>Price (KES)</h3>
          </th>
          <th>
            <h3>Total Value (KES)</h3>
          </th>
          <th>
            <h3></h3>
          </th>
          <th>
            <h3></h3>
          </th>
          <th>
            <h3></h3>
          </th>
        </tr>
      {stocks.map((stock) => {
       
        return (
          
          <StockItem
            listId={0}
            key={stock.id}
            name={stock.name}
            description={stock.description}
            sold={stock.sold}
            qty={stock.qty}
            price={stock.price}
            total={stock.total}
            initialStock={stock.initialStock}
            sales={stock.sales}
            stockId={stock.id}
            deleteHandler={deleteHandler}
            getStockData={getStockData}
            
          />
        );
       
      })}

    {sampledata.map((data)=>{
      
      return( 
      <tr key={data.id}>
         
         <td>{data.name}</td>
         <td>{data.description}</td>
         <td>{data.qty}</td>
         <td>{data.price}</td>
         <td>{data.total}</td>
         
         <td>
          <Link to={`/${data.id}`}> 
          <button>View</button>
          </Link>
          </td>
   </tr>
   );
  })}
      
        </tbody>
    </table>

  );
}

export default StockList;
