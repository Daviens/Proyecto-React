import NavBar from "./components/NavBar"
import ItemListContainer from "./containers/itemListContainer"

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greetings={"Bienvenido a nustra tienda virtual!"}/>
    </>
  )
}

export default App
