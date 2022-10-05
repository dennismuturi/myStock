import React, { useEffect, useState } from 'react';
import StockList from './StockList';
import AddStock from './AddStock';
import SideBar from './SideBar';
import StockDataService from '../services/dataServiceApi'

function Dashboard() {
  const [myStocks, setStocks] = useState([]);
  useEffect(() => {
    getStocks();
  }, [myStocks]);

  const getStocks = async () => {
    const data = await StockDataService.getAllStocks();
    setStocks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h1 class="text-3xl font-bold underline">Dashboard</h1>
      <AddStock/>
      <div class="grid gap-3 grid-cols-5 grid-rows-2">
      <StockList stocks={myStocks} />
      </div>
    </div>
  );
}

export default Dashboard;
