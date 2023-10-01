import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home/Home";
import Admissions from "../components/Admissions/Admissions";
import Academics from "../components/Academics/Academics";
import Teachers from "../components/Teachers/Teachers";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: 'admissions',
                element:<Admissions/>
            },
            {
                path: 'academics',
                element:<Academics/>
            },
            {
                path: 'teachers',
                element:<Teachers/>
            }
        ]
    }
])