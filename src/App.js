import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Cards from "./Cards";
import Debug from "./Debug"

function App() {
    return(
        <>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/Debug" element={<Debug />} />
          </Routes>
        </>
    )
}

export default App