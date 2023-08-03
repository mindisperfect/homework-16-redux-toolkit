import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoriesP from "./pages/CategoriesP";
// import ProductsP from "./pages/ProductsP";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CategoriesP />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
