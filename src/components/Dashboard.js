import React, { useEffect, useState } from 'react';
import StockList from './StockList';
import AddStock from './AddStock';
import UpdateStock from './UpdateStock';

import StockDataService from '../services/dataServiceApi'

function Dashboard() {
  const [myStocks, setStocks] = useState([]);
  const [stockToUpdate,setStockToUpdate]=useState({})
  const [modal,setModal]=useState(false)

  useEffect(() => {
    getStocks();
  }, [myStocks]);

  const getStocks = async () => {
    const data = await StockDataService.getAllStocks();
    setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };



  const deleteHandler = async (id)=>{
    await StockDataService.deleteStock(id)
    getStocks();
 
  }
 
  const getStockData= ({stockId,name,description,qty,price,total})=> {
    setStockToUpdate({stockId,name,description,qty,price,total});
    setModal(true)

  }
  
  return (
    <div>
      <h1>Dashboard</h1>
      {modal ? 
      <UpdateStock 
      handleCloseModal={(modal)=>setModal(false)}
      stockToUpdate={stockToUpdate}
      /> : null
      };
      
      <AddStock/>
      <div>
      <StockList 
      stocks={myStocks} 
      deleteHandler={deleteHandler}
      getStockData={getStockData}
      
      />
      </div>
    </div>
  );
}

export default Dashboard;
