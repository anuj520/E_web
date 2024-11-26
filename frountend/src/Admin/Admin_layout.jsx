import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../store/ContextApi"
import { FaHome, FaUser } from "react-icons/fa"
import { MdMessage } from "react-icons/md";
import { FaHireAHelper } from "react-icons/fa6";

export const Admin_Layout = () =>{
const{user,loading,isLogin} = useAuth()

if (loading) {
 return <h1>Loading...</h1>   
}
if (!user.isAdmin && !loading && isLogin) {
 return <Navigate to={'/Home'} />  
}

return(
    <>
    <section className="Alayout">
        <ul>
         <NavLink to={'users'}> <li><FaUser/> User</li> </NavLink> 
         <NavLink to={'contect'}>  <li><MdMessage/> Messages</li> </NavLink> 
         <NavLink to={'problems'}> <li><FaHireAHelper/> Problems</li></NavLink>  
         <NavLink to={"/Home"}>  <li><FaHome/> Home</li> </NavLink> 
        </ul>
    </section>
    <Outlet/>
    </>
)    
}