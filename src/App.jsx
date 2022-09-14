import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/itemListContainer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {/* <ItemListContainer greetings={"Bienvenido a nustra tienda virtual!"}/> */}
    </BrowserRouter>
  )
}

export default App
