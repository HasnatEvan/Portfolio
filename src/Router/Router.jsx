import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/contact/Contact";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Details from "../Pages/Home/Details";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'/about',
                element:<AboutMe></AboutMe>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path: '/projects/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    const res = await fetch('/project.json'); // Ensure the correct path
                    const data = await res.json();
                    return data.find(item => item.id === parseInt(params.id)); // Convert params.id to number
                },
            }
            
            
        ]
    },
]);