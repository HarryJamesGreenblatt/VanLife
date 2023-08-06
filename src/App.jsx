import "./server.js" ;
import { 
  // BrowserRouter,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx" ;
import Layout from "./components/Layout.jsx";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans.jsx";
import VanDetail, { loader as vansDetailLoader } from "./pages/Vans/VanDetail.jsx";
import HostLayout from "./components/HostLayout.jsx";
import Error from "./components/Error.jsx";
import HostVans, {loader as hostVansLoader} from "./pages/Host/HostVans.jsx";
import HostVanDetail, {loader as hostVanDetailLoader} from "./pages/Host/HostVanDetail.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Detail from "./pages/Host/HostVanDetail/Details.jsx";
import Pricing from "./pages/Host/HostVanDetail/Pricing.jsx";
import Photos from "./pages/Host/HostVanDetail/Photos.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import Login, {loader as loginLoader } from "./pages/Login.jsx";
import { requiredAuth } from "./utils.js";
// import AuthRequired from "./components/AuthRequired.jsx";


const router = createBrowserRouter(
  
  createRoutesFromElements( 
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" loader={loginLoader} element={<Login />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
      <Route path="vans/:id" loader={vansDetailLoader} element={<VanDetail />} />
      
      <Route path="host" element={<HostLayout />}>
        <Route 
          index 
          element={<Dashboard />} 
          loader={async () => await requiredAuth()}
        />
        <Route path="income" loader={async () => await requiredAuth()} element={<Income />} />
        <Route path="reviews" loader={async () => await requiredAuth()} element={<Reviews />} />
        <Route path="vans" loader={hostVansLoader} element={<HostVans />} />
        <Route path="vans/:id" loader={hostVanDetailLoader} element={<HostVanDetail />}>
          <Route 
            index 
            loader={async () => await requiredAuth()} 
            element={<Detail />} 
          />
          <Route path="pricing" loader={async () => await requiredAuth()} element={<Pricing />} />
          <Route path="photos" loader={async () => await requiredAuth()} element={<Photos />} />
        </Route>
      </Route>
    </Route>
  ), 
  
  {
    basename: "/VanLife/"
  }
)


function App() {
  // console.log(router)
  return (
    // <BrowserRouter basename="/VanLife">
    //   {/* {router} */}
    // </BrowserRouter>
    <RouterProvider router={router}/>
    
  )
}

export default App
