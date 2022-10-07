import React, { useEffect, useState } from 'react';
import StockList from './StockList';
import AddStock from './AddStock';
import UpdateStock from './UpdateStock';
import StockDataService from '../services/dataServiceApi'
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './ProductDetails';

function Dashboard() {
  const [myStocks, setStocks] = useState([]);
  const [stockToUpdate,setStockToUpdate]=useState({})
  const [updateModal,setUpdateModal]=useState(false)
  const [addModal,setAddModal]=useState(false)
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
 
  const getStockData= ({stockId,name,description,qty,sold,price,total})=> {
    setStockToUpdate({stockId,name,description,qty,sold,price,total});
    setUpdateModal(true)

  }
  
  return (
    <div>
      <h1>myStock</h1>
      {
        myStocks.map((stock)=>{
          if(stock.qty === 1)
          {
            
            return(
            <div>
              <p style={{color : 'red'}}
              key={stock.id}>
                <span style={{color : '#8B0000'}}>Alert!!,</span>   Your {stock.name} are almost finished,
                Kindly Restock!!
              </p> 
          </div> 
            )
          }
        })
      }
      <button onClick={(addModal)=>setAddModal(true)}>Add New Stock</button>
      {updateModal ? 
    <UpdateStock 
      handleCloseModal={(updateModal)=>setUpdateModal(false)}
      stockToUpdate={stockToUpdate}
      /> : null
      }
       {addModal ? 
      <AddStock handleCloseModal={(addModal)=>setAddModal(false)}/>
      : null
      }
      <div>
      <Routes>
      <Route path="/" element={
      <StockList 
      stocks={myStocks} 
      deleteHandler={deleteHandler}
      getStockData={getStockData}
      />
    }/>
      
    <Route exact path=":id" element={<ProductDetails allStocks={myStocks}/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default Dashboard;
