import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './CSS/index.css'
import Connecting from "./Connecting.jsx";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Projects from "./Components/Projects.jsx";


const route = createBrowserRouter([
    {
        path:'/',
        element:<Connecting/>,
    },
    {
        path:'/Projects',
        element:<Projects />,
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
