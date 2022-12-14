import React from 'react';
import StockItem from './StockItem';



function StockList({ stocks,deleteHandler, getStockData }) {
 
  return (
    <table >
      <tbody>
        <tr  style={{background:'darkgrey'}}>
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
           
          </th>
        </tr>
      {Array.isArray(stocks) ? stocks.map((stock) => {
       
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
       
      })
      : null
    }
      </tbody>
    </table>

  );
}

export default StockList;
