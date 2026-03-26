import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./pages/Principal"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"
import Inicio from "./pages/Inicio"
import Detalhes from "./pages/Detalhes"
import Contato from "./pages/Contato"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/perfil/:nome" element={<Perfil />} />
               
            </Routes>
        </BrowserRouter>
    )
}
export default App