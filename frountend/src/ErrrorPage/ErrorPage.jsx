import { NavLink } from "react-router-dom"

export const ErrorPage = () =>{
    return<>
    <div className="page_404">
  <div className="container2">
    <div className="row">
      <div className="col-sm-12 ">
        <div className="col-sm-10 col-sm-offset-1  text-center">
          <div className="four_zero_four_bg">
            <h1 className="text-center ">404 ERROR</h1>

          </div>

          <div className="contant_box_404">
            <h3 className="h2">
              Look like you're lost
            </h3>

            <p>the page you are looking for not avaible!</p>

            < NavLink to={'/Home'}><div className="link_404">Go to Home</div></NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
}