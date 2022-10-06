import {db} from '../config/firebase-config'

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
      const stockDoc = doc(db,"stocks",id);
      return updateDoc(stockDoc,stockToUpdate);
  };

  deleteStock =(id)=>{
    const stockDoc = doc(db,"stocks",id);
    return deleteDoc(stockDoc);
  };

  getAllStocks = () =>{
    return getDocs(stockCollection)
  }

  getStock = (id) => {
    const stockDoc=doc(db,"stocks",id);
    return getDoc(stockDoc)
  }

}


export default new StockDataService();