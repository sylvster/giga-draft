import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Cards from "./Cards";

function App() {
    return(
        <>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path="/Cards" element={<Cards />} />
          </Routes>
        </>
    )
}

export default App