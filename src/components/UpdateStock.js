import React,{useState} from "react"
import StockDataService from '../services/dataServiceApi'
import "../styles.css"


function UpdateStock({handleCloseModal,stockToUpdate}){
const  [message,setMessage]=useState({error:false , message:""});
const [updateStock,setUpdate]=useState({
        id :stockToUpdate.stockId,
        name : stockToUpdate.name,
        description:stockToUpdate.description,
        qty:stockToUpdate.qty,
        price:stockToUpdate.price,
        total:stockToUpdate.total,
    });
    async function updateHandler(e){
        e.preventDefault();
            try {
        await StockDataService.updateStock(updateStock.id,updateStock);
        setMessage({error:false,message:"Updated Successfully!!"});
            }
            catch(err){
                setMessage({error:true,message:err.message});
              }
        setUpdate({
            name : "",
            description:"",
            qty:"",
            price:"",
            total:"", 
        })
    }
    return (
        <div className="modal" style={{display:'block'}}>
            <div className="modal-content">
                <span onClick={()=>{handleCloseModal(false)}} className="close">&times;</span>
                <div>
                    <form onSubmit={updateHandler}>
                       {message.message}
                        <h2>UPDATE: <span style={{color:'green'}}>{stockToUpdate.name}</span></h2>
                        <h3>How many <span style={{color:'green'}}>{`${stockToUpdate.name}s`}</span> have you sold so far? </h3>
                        <input type="number" placeholder="Input number of items sold" 
                          value={parseInt(updateStock.qty)} 
                         onChange={(e)=>{
                          setUpdate({ ...updateStock,
                            qty: parseInt(e.target.value),
                             total : parseInt(e.target.value) * parseInt(stockToUpdate.price)
                            })
                        }}
                        />
                        <button>Update</button>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStock;