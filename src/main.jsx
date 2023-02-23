import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import './index.css'
import NuevoCliente from './pages/NuevoCliente'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<h1>Inicio</h1>
      },
      {
    path:'/clientes/nuevo',
    element:<NuevoCliente/>
  }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
