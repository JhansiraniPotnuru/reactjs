import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import Cart from "./Cart";
import PurchaseHistory from "./Purchasehistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css'; 
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";

function App() {
  const cart = useSelector((state)=>state.cart);
  const totalItems =cart.reduce((sum,item)=>sum+item.quantity,0);
  return (
    <>
         <GoogleOAuthProvider clientId="93022176452-d2i5o772gbt1lgrm0utvli4g5civ5i9e.apps.googleusercontent.com">
           <GoogleLoginComponent/> 
         </GoogleOAuthProvider>
    
     <BrowserRouter>

       <nav>

        <Link to="/">Home</Link>
        <Link to="/Veg">Veg</Link>
        <Link to="/Nonveg">Nonveg</Link>
        <Link to='/cart'>cart({totalItems})</Link>
        <Link to="/PurchaseHistory">PurchaseHistory</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/ContactUs">ContactUs</Link>
        
       </nav>
     

         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Veg" element={<Veg />} />
           <Route path="/Nonveg" element={<Nonveg />} />
           <Route path="/Cart" element={<Cart />} />
           <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
           <Route path="/AboutUs" element={<AboutUs />} />
           <Route path="/ContactUs" element={<ContactUs />} />
         </Routes>
       </BrowserRouter>
    </>
    
  );
}

export default App;
