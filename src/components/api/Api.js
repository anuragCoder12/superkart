import axios from "axios";

 const baseurl='https://fakestoreapi.com/products'
  
 export const getAllproducts=async()=>{
    const response=await axios.get(`${baseurl}/products`)
    return response.data
 }
 export const getproductId=async(id)=>{
    const response=await axios.get(`${baseurl}/product/${id}`)
    return response.data
 }
