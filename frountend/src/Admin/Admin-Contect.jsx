import { useEffect, useState } from "react"
import { useAuth } from "../store/ContextApi"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export const AdContect = () =>{
    const{AuthToken } = useAuth()
    const[contect , setcontect] = useState([])

const getAllmessage = async() =>{
 const response = await fetch("http://localhost:5000/admin/contect",{
    method:"GET",
    headers:{
        Authorization:AuthToken    
    }
 })   
 const data = await response.json()
 setcontect(data)
}

const handleDelete = async(id) =>{
try {
const response = await fetch(`http://localhost:5000/admin/contect/delete/${id}`,{
  method:"DELETE",
  headers:{
    Authorization:AuthToken   
  }  
})  
if (response.ok) {
    getAllmessage()
 toast.success('Delete sucessfully')   
}  
} catch (error) {
 console.log("hndledelete",error);
    
}
}
    useEffect(()=>{
     getAllmessage()   
    },[])
    return(
        <>
       <section className="UserTable">
        <table>
            <thead>
           <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Delete</th>
            </tr>     
            </thead>
            <tbody>
                {contect.map((info,index)=>{
               return(
               <tr key={index}>
                <td>{info.username}</td>
                <td>{info.email}</td>
                <td>{info.message}</td>

                <td>
                    <button onClick={() =>handleDelete(info._id)}>Delete</button>
                </td>
               </tr> 
               )     
                })}
            </tbody>
        </table>
       </section>
        </>
    )
}