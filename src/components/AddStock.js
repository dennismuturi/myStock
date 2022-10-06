import React, {useState} from 'react'
import Button from './Button'
import StockDataService from '../services/dataServiceApi'

function AddStock() {

const  [message,setMessage]=useState({error:false , message:""})
const [formData,setFormData]=useState({
    name:"",
    description:"",
    qty:parseInt(0),
    price:parseInt(0),
    total:parseInt(0),
  })

    async function handleSubmit(e){   
      e.preventDefault();
      setMessage("");
      if(
      formData.name=== "" 
      || formData.description==="" 
      || formData.qty===0
      || formData.price===0
      || formData.total===0
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
        qty:parseInt(0),
        price:parseInt(0),
        total:parseInt(0),
      })

      console.log(formData)
  }

    return(
  <div>
    <div>{message.error}{message.message}</div>
    <form  onSubmit={handleSubmit}>
    <div>
      <div>
      <label>Name:</label>
      <input 
      name="name" type="text" placeholder="Product Name" value={formData.name} 
       onChange={(e)=>{
        setFormData({ ...formData, name: e.target.value })
      }}/>
    </div>
    
    <div>
      <label>Description</label>
      <input 
       name="description" type="text" placeholder="Product Description"  value={formData.description} 
       onChange={(e)=>{
        setFormData({ ...formData, description: e.target.value })
      }}
      />
    </div>
    
    <div>
      <label>Quantity</label>
      <input name="qty" type="number" placeholder="Quantity"value={parseInt(formData.qty)} 
       onChange={(e)=>{
        setFormData(
          { ...formData,
          qty: parseInt(e.target.value),
        })
      }}
      />
    </div>
    
    <div>
      <label>Price</label>
      <input name="price" type="number" placeholder="Price" value={parseInt(formData.price)}
       onChange={(e)=>{
        setFormData(
          { ...formData,
           price: parseInt(e.target.value),
           total:parseInt(formData.qty) * parseInt(formData.price)
          
          })
      }}
      />
    </div>
    
    <div>
      <label>Total Value</label>
       <input name="total" type="number" placeholder="Total Value"
       value={parseInt(formData.total)}
       />
    </div>
     
     
      
      <Button type={"submit"} title="Add Stock"/>
      </div>
    </form>
  </div>
    
  )
}

export default AddStock