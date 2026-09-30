
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
// import Navbar from "./components/Navbar";
// import NotFoundPage from "./pages/NotFoundPage";
import Show from "./pages/show"
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/show" element={<Show/>}/>
            <Route path="/products/:id" element={<ProductPage/>}/>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;