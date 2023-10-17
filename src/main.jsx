import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Index  from './layout/Index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Index /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)