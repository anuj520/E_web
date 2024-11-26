import { useEffect, useState } from "react"
import { useAuth } from "../store/ContextApi"
import { toast } from "react-toastify"
import { NavLink } from "react-router-dom"

export const Users = () =>{
const{AuthToken } = useAuth()
const[User,setUser] = useState([])

const getAllUser = async() =>{
try {
const response = await fetch("http://localhost:5000/admin/users",{
 method: "GET",
 headers:{
    Authorization:AuthToken 
 }   
}) 
const data = await response.json() 
setUser(data)
  
} catch (error) {
console.log("getAllUser",error);
    
}    
}
//delete porsecon

const handleDelete = async(id) =>{
try {
   const response = await fetch(`http://localhost:5000/admin/users/delete/${id}`,{
    method: "DELETE",
    headers:{
     Authorization:AuthToken   
    }
   }) 
  if (response.ok) {
    getAllUser()
    toast.success("Delete sucessful")
  } 
} catch (error) {
console.log("handleDelete",error);
    
}    
}

    useEffect(()=>{
      getAllUser()  
    },[])
    return(
         <section className="UserTable">
            <table>
            <thead>
             <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>        
            </thead>
            <tbody>
                {User.map((info,index)=>{
                  return(
                    <tr key={index}>
                     <td>{info.username}</td>   
                     <td>{info.email}</td>   
                     <td>{info.phone}</td>  
                     <td>
          <NavLink to={`/admin/user/${info._id}/edit`}><button >Edit</button></NavLink>    
        </td>  
        <td>
        <button onClick={()=>handleDelete(info._id)}>Delete</button>    
        </td> 
                    </tr>
                  )  
                })}
            </tbody>
            </table>
         </section>
    )
}