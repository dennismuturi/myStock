import React from 'react';
import StockItem from './StockItem';

function StockList({ stocks }) {

 

  return (
    <div>
      {stocks.map((stock) => {
        return (
          
          <StockItem
            key={stock.id}
            name={stock.name}
            description={stock.description}
            qty={stock.qty}
            price={stock.price}
            total={stock.total}
           
          />
         
        );
      })}
    </div>
  );
}

export default StockList;
