import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Admin from "./components/Admin";
import Product from "./components/Product";
import CustomerCrd from "./components/CustomerCrd";
import LoadingContext from "./components/Context/LoadingContext";
import DisplayProduct from "./components/ProductDisplay/DisplayProduct";
import Productdisplay from "./components/ProductDisplay/Productdisplay";
import NewRoute from "./NewRoute";

function App() {
  return (
    <LoadingContext>
      <Routes>
        <Route path="/" element={< Main />} />
        <Route path="/newPath" element={<NewRoute/>}/>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Customercrd" element={<CustomerCrd />} />
        <Route path="/DisplayProduct" element={<DisplayProduct />} />
        <Route path="/DisplayProduct/:productId" element={<DisplayProduct />} />
      </Routes>
    </LoadingContext>
  );
}

export default App;
