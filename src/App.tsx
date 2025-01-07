import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { useGetProductsQuery } from "./redux/api/product-api";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Header from "./components/Header";

function App() {
  // const {data} = useGetProductsQuery("")
  // console.log(data);
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
