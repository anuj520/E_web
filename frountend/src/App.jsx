import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetStarted } from "./GetStarted/GetStarted";
import { SignUp } from "./GetStarted/SignUp";
import { Login } from "./GetStarted/Login";
import { Home } from "./HomePart/home";
import { Detalish } from "./HomePart/Detalish";
import { Search } from "./Search/Search";
import { Tv } from "./Tv/tv";
import { Categories } from "./Categories/Categories";
import { Sports } from "./Sports/Sports";
import { Movies } from "./Movies/movies";
import { Person } from "./person/person";
import { Contect } from "./Contect/contect";
import { Help } from "./help/help";
import { Admin_Layout } from "./Admin/Admin_layout";
import { AdContect } from "./Admin/Admin-Contect";
import { Problems } from "./Admin/Admin-problems";
import { Users } from "./Admin/Admin-User";
import { User_update } from "./Admin/UserUpdate";
import { ErrorPage } from "./ErrrorPage/ErrorPage";
export const App = () =>{
 const router = createBrowserRouter([
  {
    path: "/",
    element: <GetStarted/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signUp",
    element: <SignUp/> 
  },
  {
    path: "/login",
    element: <Login/> 
  },
  {
    path: "/Home",
    element: <Home/> 
  },
  {
    path: "/search",
    element: <Search/> 
  },
  {
    path: "/tv",
    element:<Tv/>
  },
  {
    path: "/Categories",
    element:<Categories/>
  },{
    path: "/Sports",
    element: <Sports/>
  },{
    path: "/Movies",
    element: <Movies/>
  },
  {
    path: "/User",
    element: <Person/>
  },
  {
    path: "/contect",
    element: <Contect/>
  },
  {
    path: "/help",
    element: <Help/>
  },
  {
    path: "/admin",
    element: <Admin_Layout/>,
    children:[
      {
      path: 'users',
      element:<Users/>
      },
      {
        path: "contect",
        element: <AdContect/>
      },
      {
        path: "problems",
        element: <Problems/>
      }
    ]
  },
{  path: "/admin/user/:id/edit",
  element: <User_update/>}
])
return (
  <RouterProvider router={router}></RouterProvider>
)
}