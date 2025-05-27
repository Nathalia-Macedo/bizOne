// import { useState } from "react"
// import logos from "../assets/partners-logo.png"
// import box from "../assets/glassmorphism.png"

// function BuzOne() {
//   const [formData, setFormData] = useState({
//     nome: "",
//     email: "",
//     telefone: "",
//     dataNascimento: "",
//   })

//   const [errors, setErrors] = useState({})

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))

//     // Remove o erro quando o usuário começa a digitar
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.nome.trim()) {
//       newErrors.nome = "Nome é obrigatório"
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "E-mail é obrigatório"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "E-mail inválido"
//     }

//     if (!formData.telefone.trim()) {
//       newErrors.telefone = "Telefone é obrigatório"
//     }

//     if (!formData.dataNascimento.trim()) {
//       newErrors.dataNascimento = "Data de nascimento é obrigatória"
//     }

//     return newErrors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     // Aqui você pode processar o formulário
//     console.log("Formulário válido:", formData)
//     alert("Formulário enviado com sucesso!")
//   }

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row font-sans">
//       {/* Left Section - Dark Background with Texture */}
//       <div
//         className="w-full lg:w-1/2 text-white p-4 sm:p-6 lg:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden"
//         style={{
//           backgroundImage: "url(/background-texture.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Conteúdo principal centralizado */}
//         <div className="flex-1 flex flex-col justify-center items-center relative py-8 lg:py-0">
//           {/* Título principal */}
//           <div className="relative mt-8 lg:mt-16">
//             {/* Logo posicionada sobre a primeira palavra */}
//             <div className="absolute -top-8 left-6 sm:-top-12 sm:left-12 lg:-top-14 lg:left-14">
//               <img src="/bizmod-logo.png" alt="Bizmod Logo" className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
//             </div>

//             <h1 className="font-semibold mb-4 sm:mb-6 text-white px-4">
//               {/* Versão desktop */}
//               <div
//                 className="hidden sm:block text-xl lg:text-2xl"
//                 style={{
//                   lineHeight: "1.4",
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: "600",
//                   textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
//                 }}
//               >
//                 <div>
//                   Em um{" "}
//                   <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
//                     mundo de ideias
//                   </span>
//                   ,
//                 </div>
//                 <div>
//                   como não ser{" "}
//                   <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
//                     igual a todo mundo
//                   </span>
//                   ?
//                 </div>
//               </div>

//               {/* Versão mobile */}
//               <div
//                 className="block sm:hidden text-sm"
//                 style={{
//                   fontFamily: "Montserrat, sans-serif",
//                   fontWeight: "600",
//                   textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
//                   lineHeight: "1.4",
//                 }}
//               >
//                 <div>
//                   Em um{" "}
//                   <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
//                     mundo de ideias
//                   </span>
//                   , como não ser
//                 </div>
//                 <div>
//                   <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
//                     igual a todo mundo
//                   </span>
//                   ?
//                 </div>
//               </div>
//             </h1>
//           </div>

//           {/* Nova ilustração dos dispositivos */}
//           <div className="mb-2 sm:mb-3">
//             <img
//               src="/devices-illustration.png"
//               alt="Dispositivos Biz One"
//               className="w-[280px] sm:w-[320px] lg:w-[480px] max-w-full h-auto"
//             />
//           </div>

//           {/* Caixa glassmorphism com imagem real */}
//           <div className="relative mb-2 w-full max-w-lg sm:max-w-md lg:max-w-xl px-0 sm:px-4">
//             <img src={box || "/placeholder.svg"} alt="Glassmorphism Box" className="w-full h-auto" />
//             <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-8 lg:px-14 py-2 sm:py-6 lg:py-10">
//               <p className="font-medium text-white text-center leading-tight sm:leading-relaxed">
//                 <div className="hidden sm:block text-sm lg:text-base">
//                   <div className="mb-1">
//                     Um produto Bizmod que usa <span className="font-bold text-white">Inteligência Global</span> para te
//                   </div>
//                   <div>ensinar a criar a ideia lucrativa que ninguém criou ainda.</div>
//                 </div>
//                 <div className="block sm:hidden text-xs">
//                   <div className="mb-1">
//                     Um produto Bizmod que usa <span className="font-bold text-white">Inteligência Global</span>
//                   </div>
//                   <div>para te ensinar a criar a ideia lucrativa que ninguém criou ainda.</div>
//                 </div>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Logos das empresas parceiras - FONTE DIMINUÍDA */}
//         <div className="mt-1 pb-4 lg:pb-0">
//           <p className="text-[10px] sm:text-xs lg:text-xs text-gray-300 mb-3 sm:mb-4 font-medium">
//             ESTUDAMOS MARCAS QUE DOMINAM O FUTURO COMO:
//           </p>
//           <div className="flex justify-center">
//             <img
//               src={logos || "/placeholder.svg"}
//               alt="Logos das empresas parceiras"
//               className="h-8 sm:h-10 lg:h-12 opacity-70"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Light Background with Form - SUBIDO PARA CIMA */}
//       <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-8 flex flex-col justify-start lg:justify-center">
//         <div className="max-w-md mx-auto w-full">
//           <div
//             className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-lg"
//             style={{
//               boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {/* PONTO REMOVIDO DO BIZ ONE */}
//             <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3" style={{ color: "#49748A" }}>
//               Biz One
//             </h2>
//             {/* FONTE DIMINUÍDA PARA CABER EM UMA LINHA */}
//             <p className="text-gray-800 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl font-semibold leading-tight">
//               Onde ideias que mudam o jogo começam.
//             </p>

//             <form className="space-y-3 sm:space-y-4 lg:space-y-5" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
//                 <input
//                   type="text"
//                   name="nome"
//                   value={formData.nome}
//                   onChange={handleInputChange}
//                   placeholder="Ex: Mariana Silva"
//                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     errors.nome ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//                 {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Ex: mariana@email.com.br"
//                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     errors.email ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
//                 <input
//                   type="tel"
//                   name="telefone"
//                   value={formData.telefone}
//                   onChange={handleInputChange}
//                   placeholder="Ex: (11) 99900-0000"
//                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     errors.telefone ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//                 {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
//                 <input
//                   type="date"
//                   name="dataNascimento"
//                   value={formData.dataNascimento}
//                   onChange={handleInputChange}
//                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     errors.dataNascimento ? "border-red-500" : "border-gray-200"
//                   }`}
//                 />
//                 {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento}</p>}
//               </div>

//               <div className="text-xs text-gray-500 leading-relaxed">
//                 Ao clicar em Cadastrar, você concorda com nossos{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Termos
//                 </a>
//                 ,{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Política de Privacidade
//                 </a>{" "}
//                 e{" "}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Política de Cookies
//                 </a>
//                 .
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-lg"
//               >
//                 Acesse agora sem pagar nada
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BuzOne


"use client"

import { useState, useEffect } from "react"
import { MetaEvents } from "../lib/meta-pixel"
import logos from "../assets/partners-logo.png"
import box from "../assets/glassmorphism.png"

function BuzOne() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
  })

  const [errors, setErrors] = useState({})
  const [hasTrackedInitiate, setHasTrackedInitiate] = useState(false)

  // Disparar evento de PageView quando componente carrega
  useEffect(() => {
    MetaEvents.pageView()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Remove o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Disparar evento quando usuário começa a preencher o formulário (apenas uma vez)
  const handleFormFocus = () => {
    if (!hasTrackedInitiate) {
      MetaEvents.initiateRegistration()
      setHasTrackedInitiate(true)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "E-mail inválido"
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório"
    }

    if (!formData.dataNascimento.trim()) {
      newErrors.dataNascimento = "Data de nascimento é obrigatória"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      // Disparar eventos de conversão
      MetaEvents.completeRegistration({
        email: formData.email,
        phone: formData.telefone,
        firstName: formData.nome,
      })

      MetaEvents.lead({
        email: formData.email,
        phone: formData.telefone,
        firstName: formData.nome,
      })

      console.log("Formulário válido:", formData)
      alert("Formulário enviado com sucesso!")

      // Limpar formulário
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
      })
      setHasTrackedInitiate(false)
    } catch (error) {
      console.error("Erro ao enviar eventos Meta:", error)
      // Ainda assim processar o formulário
      alert("Formulário enviado com sucesso!")
    }
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left Section - Dark Background with Texture */}
      <div
        className="w-full lg:w-1/2 text-white p-4 sm:p-6 lg:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden"
        style={{
          backgroundImage: "url(/background-texture.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Conteúdo principal centralizado */}
        <div className="flex-1 flex flex-col justify-center items-center relative py-8 lg:py-0">
          {/* Título principal */}
          <div className="relative mt-8 lg:mt-16">
            {/* Logo posicionada sobre a primeira palavra */}
            <div className="absolute -top-8 left-6 sm:-top-12 sm:left-12 lg:-top-14 lg:left-14">
              <img src="/bizmod-logo.png" alt="Bizmod Logo" className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </div>

            <h1 className="font-semibold mb-4 sm:mb-6 text-white px-4">
              {/* Versão desktop */}
              <div
                className="hidden sm:block text-xl lg:text-2xl"
                style={{
                  lineHeight: "1.4",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>
                  Em um{" "}
                  <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
                    mundo de ideias
                  </span>
                  ,
                </div>
                <div>
                  como não ser{" "}
                  <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
                    igual a todo mundo
                  </span>
                  ?
                </div>
              </div>

              {/* Versão mobile */}
              <div
                className="block sm:hidden text-sm"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                  lineHeight: "1.4",
                }}
              >
                <div>
                  Em um{" "}
                  <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
                    mundo de ideias
                  </span>
                  , como não ser
                </div>
                <div>
                  <span className="rounded-sm px-1" style={{ backgroundColor: "#ff9274" }}>
                    igual a todo mundo
                  </span>
                  ?
                </div>
              </div>
            </h1>
          </div>

          {/* Nova ilustração dos dispositivos */}
          <div className="mb-2 sm:mb-3">
            <img
              src="/devices-illustration.png"
              alt="Dispositivos Biz One"
              className="w-[280px] sm:w-[320px] lg:w-[480px] max-w-full h-auto"
            />
          </div>

          {/* Caixa glassmorphism com imagem real */}
          <div className="relative mb-2 w-full max-w-lg sm:max-w-md lg:max-w-xl px-0 sm:px-4">
            <img src={box || "/placeholder.svg"} alt="Glassmorphism Box" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-8 lg:px-14 py-2 sm:py-6 lg:py-10">
              <p className="font-medium text-white text-center leading-tight sm:leading-relaxed">
                <div className="hidden sm:block text-sm lg:text-base">
                  <div className="mb-1">
                    Um produto Bizmod que usa <span className="font-bold text-white">Inteligência Global</span> para te
                  </div>
                  <div>ensinar a criar a ideia lucrativa que ninguém criou ainda.</div>
                </div>
                <div className="block sm:hidden text-xs">
                  <div className="mb-1">
                    Um produto Bizmod que usa <span className="font-bold text-white">Inteligência Global</span>
                  </div>
                  <div>para te ensinar a criar a ideia lucrativa que ninguém criou ainda.</div>
                </div>
              </p>
            </div>
          </div>
        </div>

        {/* Logos das empresas parceiras */}
        <div className="mt-1 pb-4 lg:pb-0">
          <p className="text-[10px] sm:text-xs lg:text-xs text-gray-300 mb-3 sm:mb-4 font-medium">
            ESTUDAMOS MARCAS QUE DOMINAM O FUTURO COMO:
          </p>
          <div className="flex justify-center">
            <img
              src={logos || "/placeholder.svg"}
              alt="Logos das empresas parceiras"
              className="h-8 sm:h-10 lg:h-12 opacity-70"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Light Background with Form */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-8 flex flex-col justify-start lg:justify-center">
        <div className="max-w-md mx-auto w-full">
          <div
            className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-lg"
            style={{
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3" style={{ color: "#49748A" }}>
              Biz One
            </h2>
            <p className="text-gray-800 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl font-semibold leading-tight">
              Onde ideias que mudam o jogo começam.
            </p>

            <form className="space-y-3 sm:space-y-4 lg:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  onFocus={handleFormFocus}
                  placeholder="Ex: Mariana Silva"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.nome ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={handleFormFocus}
                  placeholder="Ex: mariana@email.com.br"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  onFocus={handleFormFocus}
                  placeholder="Ex: (11) 99900-0000"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.telefone ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleInputChange}
                  onFocus={handleFormFocus}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.dataNascimento ? "border-red-500" : "border-gray-200"
                  }`}
                />
                {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento}</p>}
              </div>

              <div className="text-xs text-gray-500 leading-relaxed">
                Ao clicar em Cadastrar, você concorda com nossos{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Termos
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Privacidade
                </a>{" "}
                e{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Política de Cookies
                </a>
                .
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transition-colors duration-200 shadow-lg"
              >
                Acesse agora sem pagar nada
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuzOne
