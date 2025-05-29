"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { MetaEvents } from "../lib/meta-pixel"

function Obrigado() {
  useEffect(() => {
    // Disparar evento de conversão na página de obrigado
    MetaEvents.purchase()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          {/* Ícone de sucesso */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Título */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#49748A" }}>
            Obrigado!
          </h1>

          {/* Mensagem */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Seu cadastro foi realizado com sucesso! Em breve você receberá mais informações sobre o{" "}
            <span className="font-semibold text-gray-800">Biz One</span> no seu e-mail.
          </p>

          {/* Botões de ação */}
          <div className="space-y-3">
            <Link
              to="/bizone"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Obrigado
