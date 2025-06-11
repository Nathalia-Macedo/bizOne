// src/pages/Verificacao.jsx

import { useNavigate, useLocation } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"

function Verificacao() {
  const navigate = useNavigate()
  const location = useLocation()
  const formData = location.state?.formData

  const handleRecaptcha = async (token) => {
    try {
      const response = await fetch("https://servidor-bizone.onrender.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      })

      navigate("/obrigado")
    } catch (error) {
      console.error("Erro ao enviar lead:", error)
      navigate("/obrigado")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-center">Verificação de segurança</h2>
        <ReCAPTCHA
          sitekey="6Le261wrAAAAAILc120ZrU_6SKtLjlo-_7E9dqH2"
          onChange={handleRecaptcha}
        />
      </div>
    </div>
  )
}

export default Verificacao
