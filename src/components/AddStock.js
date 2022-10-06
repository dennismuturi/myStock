import React, {useState} from 'react'
import Button from './Button'
import StockDataService from '../services/dataServiceApi'

function AddStock() {

const  [message,setMessage]=useState({error:false , message:""})
const [total,setTotal]=useState(0)
const [formData,setFormData]=useState({
    name:"",
    description:"",
    qty:"",
    price:"",
    total:total,
  })

    async function handleSubmit(e){   
      e.preventDefault();
      setMessage("");
      if(
      formData.name=== "" 
      || formData.description==="" 
      || formData.qty=== ""
      || formData.price===""
      || formData.total===""
      ){
        setMessage({error:true, message:"All Fields Are Required!!"});
        return; 
      }
      try {
       
         // await StockDataService.updateStock(id,formData);
         
        await StockDataService.addStock(formData);
        setMessage({error:false,message:"New Stock Added Successfully!!"});
        
      }
      catch(err){
        setMessage({error:true,message:err.message});
      }
      setFormData({
        name:"",
        description:"",
        qty:"",
        price:"",
        total:0,
      })

      console.log(formData)
  }

    return(
  <div>
    <div>{message.error}{message.message}</div>
    <form  onSubmit={handleSubmit}>
    <div>
      <input 
      name="name" type="text" placeholder="Product Name" value={formData.name} 
       onChange={(e)=>{
        setFormData({ ...formData, name: e.target.value })
      }}/>
      <input 
       name="description" type="text" placeholder="Product Description"  value={formData.description} 
       onChange={(e)=>{
        setFormData({ ...formData, description: e.target.value })
      }}
      />
      <input name="qty" type="number" placeholder="Quantity"value={formData.qty} 
       onChange={(e)=>{
        setFormData({ ...formData, qty: e.target.value })
      }}
      />
      <input name="price" type="number" placeholder="Price" value={formData.price}
       onChange={(e)=>{
        setFormData({ ...formData, price: e.target.value })
      }}
      />
      <input name="total" type="number" placeholder="Total" value={formData.total}
       onChange={(e)=>{
        setFormData({ ...formData, total: e.target.value })
      }}
      />
      
      <Button type={"submit"} title="Add Stock"/>
      </div>
    </form>
  </div>
    
  )
}

export default AddStock