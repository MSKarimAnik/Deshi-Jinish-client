import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import AllArtCraftItems from './Components/AllArtCraftItems/AllArtCraftItems.jsx';
import AddCraftItem from './Components/AddCraftItem/AddCraftItem.jsx';
import MyArtCraftList from './Components/MyArtCraftList/MyArtCraftList.jsx';
import UpdatedCraftItem from './Components/UpdatedCraft/UpdatedCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtCraftItems",
        element: <AllArtCraftItems></AllArtCraftItems>,
        loader:()=>fetch('http://localhost:5000/craft')
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myArt&CraftList",
        element:<MyArtCraftList></MyArtCraftList> ,
      },
      {
        path: "/updateInfo/:id",
        element: <UpdatedCraftItem />,
        loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
