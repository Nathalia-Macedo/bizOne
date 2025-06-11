import { Routes, Route, Navigate } from "react-router-dom"
import Obrigado from "../components/Obrigado"
import MetaPixel from '../components/MetaPixel'
import BuzOne from "../components/BuzOne"
import Verificacao from "../components/Verificacao"
function App() {
  return (
    <>
      {/* Meta Pixel carrega globalmente */}
      <MetaPixel />

      <Routes>
        <Route path="/" element={<Navigate to="/bizone" replace />} />
        <Route path="/bizone" element={<BuzOne />} />
        <Route path="/obrigado" element={<Obrigado />} />
         <Route path="/verificacao" element={<Verificacao />} />
      </Routes>
    </>
  )
}

export default App
