import { Routes, Route, Navigate } from "react-router-dom"
import BuzOne from "../components/BuzOne"
import MetaPixel from "../components/MetaPixel"
function App() {
  return (
    <>
      {/* Meta Pixel carrega globalmente */}
      <MetaPixel />

      <Routes>
        <Route path="/" element={<Navigate to="/bizone" replace />} />
        <Route path="/bizone" element={<BuzOne />} />
      </Routes>
    </>
  )
}

export default App
