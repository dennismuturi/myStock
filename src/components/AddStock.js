import React, {useState} from 'react'
import Button from './Button'
import StockDataService from '../services/dataServiceApi'

function AddStock() {

const  [message,setMessage]=useState({error:false , message:""})
const [formData,setFormData]=useState({
    name:"",
    description:"",
    qty:null,
    price:null,
    total:null,
  })

    async function handleSubmit(e){   
      e.preventDefault();
      setMessage("");
      if(
      formData.name=== "" 
      || formData.description==="" 
      || formData.qty=== null
      || formData.price===null
      || formData.total===null
      ){
        setMessage({error:true, message:"All Fields Are Required!!"});
        return; 
      }
      try {
        await StockDataService.addStock(formData);
        setMessage({error:false,message:"New Stock Added Successfully!!"});
      }
      catch(err){
        setMessage({error:true,message:err.message});
      }
      setFormData(formData)

      console.log(formData)
  }

    return(
  <div>
    <div>{message.error}{message.message}</div>
    <form class="w-full max-w-sm" onSubmit={handleSubmit}>
    <div class="flex items-center border-b border-teal-500 py-2">
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
      <input name="total" type="number" placeholder="total" value={formData.total}
       onChange={(e)=>{
        setFormData({ ...formData, total: e.target.value })
      }}
      />
      <Button type={"submit"} title="Add" className={"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"}/>
      </div>
    </form>
  </div>
    
  )
}

export default AddStock