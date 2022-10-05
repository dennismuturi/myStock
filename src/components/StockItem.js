import React from "react"
import Button from './Button'

function StockItem ({key,name,description,qty,price,total,deleteHandler}){

  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
      <ul>
        <li class="text-gray-700 text-base">
          <span class="font-bold text-xl mb-2">Name: </span>
          {name}</li>
        <li class="text-gray-700 text-base">
          <span class="font-bold text-xl mb-2">Description: </span>
          {description}</li>
        <li>
        <span class="font-bold text-xl mb-2">Quantity: </span>
          {qty}
          </li>
        <li>
        <span class="font-bold text-xl mb-2">Price: </span>
          {price}
          </li>
        <li>
        <span class="font-bold text-xl mb-2">Total: </span>
          {total}
          </li>
        <li> <Button type={"submit"} title={"Edit"} 
        className={"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2"}/></li>
        <button 
        class="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2"
        onClick={(key)=>deleteHandler(key)}>Delete</button>
        </ul>
    </div>
    </div>
    
  )
}

export default StockItem;