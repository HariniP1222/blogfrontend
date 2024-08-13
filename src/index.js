import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createRoot } from "react-dom/client";

import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Blog from './Blog';
import LoginUser from './LoginUser';
import CreateUser from './CreateUser';
import Magazine from './Magazine';
import HealthAndFitness from './HealthAndFitness';
import Register from './Register';
import Trial from './Trial';
import YogaBlog from './YogaBlog';
import GymBlog from './GymBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header/>,
    
  },
  {
    path:"/main",
    element:<Main/>
  },
  {
    path:"/LoginUser",
    element:<LoginUser/>
  },
  {
    path:"/Blog",
    element:<Blog/>
  },
  {
    path:"/CreateUser",
    element:<CreateUser/>
  },
  {
    
    path:"/Magazine",
    element:<Magazine/>
  },
 
  {
    path:"/Trial",
    element:<Trial/>
  },
  {
    path:"/YogaBlog",
    element:<YogaBlog/>
  },
  {
    path:"/GymBlog",
    element:<GymBlog/>
  }
  
]);

  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
