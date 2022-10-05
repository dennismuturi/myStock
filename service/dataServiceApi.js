import {db} from './firebase.js'

import 
{collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} 
from "firebase/firestore"

const stockCollection = collection(db,"stocks");

class StockDataService {

  addStock = (newStock)=>{
      return addDoc(stockCollection,newStock);
  };

  updateStock = (id, stockToUpdate) => {
      stockDoc = doc(db,"stocks",id);
      return updateDoc(stockDoc,stockToUpdate);
  };

  deleteStock =(id)=>{
    stockDoc = doc(db,"stocks",id);
    return deleteDoc(stockDoc);
  };

  getAllStocks = () =>{
    return getDocs(stockCollection)
  }

  getStock = () => {
    const stockDoc=doc(doc,"stocks",id);
    return getDocs(stockDoc)
  }

}


export default new StockDataService();