import Body from "./Components/Body";
import Header from "./Components/Header";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import Warcher from "./Components/Warcher";
import Main from "./Components/Main";
import Result from "./Components/Result";



const App=()=>{
  console.log("App");
  return(
  <div>
        <Header/>
        <Body/>
  </div>
  )
}
export default App;