import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './Redux/store';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Components/Body';
import Main from './Components/Main';
import Warcher from './Components/Warcher';
import Result from './Components/Result';
import Error from './Components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/watch",
        element:<Warcher/>
                                              
      },{
        path:"/results",
        element:<Result/>,
        errorElement:<Error/>
      }
    ]
   
  }
])



root.render(
  
  <Provider store={appStore}>
     <RouterProvider router={appRouter}/>
  </Provider>
  

    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
