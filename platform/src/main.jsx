import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './Navbar/RightNavElements/About'
import WhereToStart from './Navbar/RightNavElements/WhereToStart.jsx'
import Announcements from './Navbar/RightNavElements/Announcements.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router  = createBrowserRouter([ 
{
  path:"/",
  element:<App/>
},
{
  path:"/about",
  element:<About/>
},
{
  path:"/wheretostart",
  element:<WhereToStart/>
},
{
  path:"/announcemnents",
  element:<Announcements/>
},{
  
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
