import React from 'react';
import StockItem from './StockItem';

function StockList({ stocks,deleteHandler, getStockData }) {


  return (
    <table >
      <tbody>
        <tr>
          <th>
            <h3 >Name</h3>
          </th>
          <th>
            <h3 >Description</h3>
          </th>
          <th>
            <h3 >Quantity</h3>
          </th>
          <th>
            <h3>Price</h3>
          </th>
          <th>
            <h3>Total</h3>
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
            key={stock.id}
            name={stock.name}
            description={stock.description}
            qty={stock.qty}
            price={stock.price}
            total={stock.total}
            stockId={stock.id}
            deleteHandler={deleteHandler}
            getStockData={getStockData}
            
          />
         
        );
      })}
    </tbody>
    </table>
  );
}

export default StockList;
