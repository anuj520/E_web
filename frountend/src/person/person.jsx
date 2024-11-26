import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../store/ContextApi"
import { FaCircleUser } from "react-icons/fa6";
import { Footer } from "../Footer";
import { Index } from "../HomePart";
export const Person = () =>{
const{user,isLogin,logOutuser,loading} = useAuth()
const navlink = useNavigate()
const handlelogout = () =>{
    logOutuser()
    navlink('/login')
}

return(
    <section className="CategoriesS">
     <Index/>   
    <section className="PerSonM">
    {isLogin && !loading && <> 
        <div>
        <img src="https://daniel.haxx.se/blog/wp-content/uploads/2016/04/a-user.png" alt="" />
        <p> <span>Hello:</span> {user.username}</p>
        </div>
        <main className="mainItem">
            <h2><span>Name:</span> {user.username}</h2>
            <h2><span>Email:</span> {user.email}</h2>
            <h2><span>Phone:</span> {user.phone}</h2>
             <button onClick={handlelogout}>Logout</button>
        </main>
        </>} 
    </section>
    <br /><br /><br /><br /><br /><br />
    <Footer/>
    {!isLogin && <> 
    <Navigate to={'/login'}></Navigate>
     </>}
    </section>
)    
}