import React from "react"
import {useParams} from "react-router-dom"


function ProductDetails(){
    const sampledata =[
        {
            id:1,
            name:"Duracoat",
            description:"Paint",
            qty:5,
            price:100,
            total:500
        },
        {
            id:2,
            name:"Mabati",
            description:"Iron sheets",
            qty:10,
            price:1000,
            total:10000
        },
    ];
    const params=useParams();
    console.log(params)
    return (
    <div>Product Details
        <div>{params.id}</div>
    </div>
           
    )
}

export default ProductDetails;