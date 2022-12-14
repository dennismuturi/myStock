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
 
  const getStockData= ({stockId,name,description,qty,sold,price,total,sales})=> {
    setStockToUpdate({stockId,name,description,qty,sold,price,total,sales});
    setUpdateModal(true)

  }
  
  return (
    
    <div className="wrapper">
     <h1 style={{color:'green'}}>myStock</h1>
     
      <div className="item1">
      
      </div>
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
    <button style={{background: 'green',color:'white'}}className="item2" onClick={(addModal)=>setAddModal(true)}>Add New Stock</button>
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

    {myStocks.length < 1 ? <p style={{color: 'red'}}>data is currently unavailable,We are working to resolve it</p> :null}
    </div>
    </div>
  );
}

export default Dashboard;
