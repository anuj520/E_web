import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const Footer = () =>{
    return(
        <>
                 <footer className="FooterAll" style={{cursor:"pointer"}}>
          <div className="footerP1">
            <h2 style={{color: "#b1cfd1"}}>Commpany</h2>
            <h3>About Us</h3>
            <h3>Careers</h3>
            <h6>© 2024 STAR. All Rights Reserved.</h6>
            <h6>Terms of Use Privacy Policy FAQ</h6>
          </div>
          <span className="footerP2">
            <h2 style={{color: "#b1cfd1"}}>View Website</h2>
            <p>English</p>
          </span>
            <div className="footerP3">
           <NavLink to={'/help'}>  <h2>Need Help ?</h2> </NavLink> 
              <p>Vist Help Center</p>
              <p>Shere Feedback</p>
            </div>
            <div className="footerP4">
        <NavLink to={'/contect'}><h2 >Contect with Us</h2> </NavLink> 
               <div><FaFacebook/> <FaInstagramSquare/></div>
               <div>
                <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="" />
               <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="" />
               </div>
            </div>
         </footer>
        </>
    )
}