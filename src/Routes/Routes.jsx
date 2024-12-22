import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllVolunteerNeeds from "../pages/AllVolunteerNeeds/AllVolunteerNeeds";
import AddVolunteerPost from "../pages/AddVolunteerPost/AddVolunteerPost";
import ManageMyPost from "../pages/ManageMyPost/ManageMyPost";
import Detail from "../pages/Detail/Detail";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/login',
            element : <Login/>
        },
        {
            path : '/register',
            element : <Register/>
        },
        {
            path : '/all-volunteer-needs',
            element : <AllVolunteerNeeds/>
        },
        {
            path : '/manage-my-posts',
            element : <ManageMyPost/>
        },
        {
            path : '/add-volunteer-post',
            element : <AddVolunteerPost/>
        },
        {
            path : '/volunteerDetail/:id',
            element : <Detail/>,
            loader : ({params})=> fetch(`http://localhost:5000/volunteer/${params.id}`)
        },
      ]
    },
  ]);

  