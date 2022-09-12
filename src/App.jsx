import NavBar from "./components/NavBar"
// import ItemListContainer from "./containers/itemListContainer"
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  
  return (
    <BrowserRouter>
      {/* <Routes> 
        <Route path="/" element={<ItemListContainer/>}/>
  </Routes>*/}
      <NavBar/>
      {/* <ItemListContainer greetings={"Bienvenido a nustra tienda virtual!"}/> */}
      <ItemDetailContainer/>
    </BrowserRouter>
  )
}

export default App
