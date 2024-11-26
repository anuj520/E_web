import { useEffect, useState } from "react"
import { useAuth } from "../store/ContextApi"
import { toast } from "react-toastify"

export const Problems = () =>{
    const[blog,setblog] = useState([])
    const{AuthToken } = useAuth()
const getAllblogs = async() =>{
try {
    const response = await fetch("http://localhost:5000/admin/blogs",{
      method:"GET",
      headers:{
        Authorization:AuthToken 
      }  
    })
    const data = await response.json()
    setblog(data);
    
} catch (error) {
 console.log("getAllblogs",getAllblogs);
    
}
}
const handleDelete = async(id) =>{
 try {
    const response = await fetch(`http://localhost:5000/admin/blogs/delete/${id}`,{
     method: "DELETE",
     headers:{
        Authorization:AuthToken 
     }   
    })
    if (response.ok) {
        getAllblogs()
    toast.success("delete Sucessfully")
    }
 } catch (error) {
  console.log("handleDelete",error);
    
 }   
}
    useEffect(()=>{
        getAllblogs()
    },[])
    return(
        <>
      <section className="ProblemB">
        {
            blog.map((curr,index)=>{
               return(
                <div key={index}>
                   <img src={`http://localhost:5000/${curr.image}`} alt={curr.image} />
                   <h1><span>Username:</span> {curr.username}</h1> 
                   <h1><span>Email:</span> {curr.email}</h1> 
                   <h1><span>Problem:</span> {curr.problem}</h1> 
                   <button onClick={() =>handleDelete(curr._id)}>Delete</button>
                </div>
               ) 
            })
        }
      </section>
        </>
    )
}