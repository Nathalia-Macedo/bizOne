// import React, { useState } from 'react';
// import logos from '../assets/partners-logo.png'
// import box from '../assets/glassmorphism.png'

// function BuzOne() {
//   const [formData, setFormData] = useState({
//     nome: '',
//     email: '',
//     telefone: '',
//     dataNascimento: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     // Remove o erro quando o usuário começa a digitar
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.nome.trim()) {
//       newErrors.nome = 'Nome é obrigatório';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'E-mail é obrigatório';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'E-mail inválido';
//     }

//     if (!formData.telefone.trim()) {
//       newErrors.telefone = 'Telefone é obrigatório';
//     }

//     if (!formData.dataNascimento.trim()) {
//       newErrors.dataNascimento = 'Data de nascimento é obrigatória';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Aqui você pode processar o formulário
//     console.log('Formulário válido:', formData);
//     alert('Formulário enviado com sucesso!');
//   };

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
//           {/* Título principal com configurações exatas do Figma */}
//           <div className="relative mt-8 lg:mt-16">
//             {/* Logo posicionada sobre a primeira palavra */}
//             <div className="absolute -top-10 left-8 sm:-top-12 sm:left-12 lg:-top-14 lg:left-14">
//               <img src="/bizmod-logo.png" alt="Bizmod Logo" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
//             </div>

//             <h1
//               className="font-semibold mb-4 sm:mb-6 text-white px-4"
//               style={{
//                 fontSize: "20px",
//                 lineHeight: "26px",
//                 letterSpacing: "0%",
//                 fontFamily: "Montserrat, sans-serif",
//                 fontWeight: "600",
//                 maxWidth: "400px",
//                 textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
//               }}
//               className="font-semibold mb-4 sm:mb-6 text-white px-4 text-lg sm:text-xl lg:text-2xl"
//             >
//               <div>
//                 Em um <span className="bg-orange-500 rounded-sm px-1">mundo de ideias</span>,
//               </div>
//               <div>
//                 como não ser <span className="bg-orange-500 rounded-sm px-1">igual a todo mundo</span>?
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

//           {/* Caixa glassmorphism com imagem real - AINDA MAIOR NO MOBILE E FONTE MENOR */}
//           <div className="relative mb-2 w-full max-w-md sm:max-w-md lg:max-w-xl px-0 sm:px-4">
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

//         {/* Logos das empresas parceiras */}
//         <div className="mt-1 pb-4 lg:pb-0">
//           <p className="text-xs text-gray-300 mb-3 sm:mb-4 font-medium">ESTUDAMOS MARCAS QUE DOMINAM O FUTURO COMO:</p>
//           <div className="flex justify-center">
//             <img src={logos || "/placeholder.svg"} alt="Logos das empresas parceiras" className="h-8 sm:h-10 lg:h-12 opacity-70" />
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Light Background with Form */}
//       <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
//         <div className="max-w-md mx-auto w-full">
//           <div
//             className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
//             style={{
//               boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3" style={{ color: "#49748A" }}>
//               Biz One.
//             </h2>
//             <p className="text-gray-800 mb-6 sm:mb-8 text-lg sm:text-xl font-semibold leading-relaxed">
//               Onde ideias que mudam o<br />
//               jogo começam.
//             </p>

//             <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
//                 <input
//                   type="text"
//                   name="nome"
//                   value={formData.nome}
//                   onChange={handleInputChange}
//                   placeholder="Ex: Mariana Silva"
//                   className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
//                     errors.nome ? 'border-red-500' : 'border-gray-200'
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
//                     errors.email ? 'border-red-500' : 'border-gray-200'
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
//                     errors.telefone ? 'border-red-500' : 'border-gray-200'
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
//                     errors.dataNascimento ? 'border-red-500' : 'border-gray-200'
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
//   );
// }

// export default BuzOne;


import React, { useState } from 'react';
import logos from '../assets/partners-logo.png'
import box from '../assets/glassmorphism.png'

function BuzOne() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Remove o erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }

    if (!formData.dataNascimento.trim()) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aqui você pode processar o formulário
    console.log('Formulário válido:', formData);
    alert('Formulário enviado com sucesso!');
  };

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
          {/* Título principal com configurações exatas do Figma */}
          <div className="relative mt-8 lg:mt-16">
            {/* Logo posicionada sobre a primeira palavra */}
            <div className="absolute -top-10 left-8 sm:-top-12 sm:left-12 lg:-top-14 lg:left-14">
              <img src="/bizmod-logo.png" alt="Bizmod Logo" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </div>

            <h1
              className="font-semibold mb-4 sm:mb-6 text-white px-4"
              style={{
                fontSize: "20px",
                lineHeight: "26px",
                letterSpacing: "0%",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "600",
                maxWidth: "400px",
                textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              className="font-semibold mb-4 sm:mb-6 text-white px-4 text-lg sm:text-xl lg:text-2xl"
            >
              <div>
                Em um <span className="bg-orange-500 rounded-sm px-1">mundo de ideias</span>,
              </div>
              <div>
                como não ser <span className="bg-orange-500 rounded-sm px-1">igual a todo mundo</span>?
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

          {/* Caixa glassmorphism com imagem real - MÁXIMO TAMANHO NO MOBILE */}
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
          <p className="text-xs text-gray-300 mb-3 sm:mb-4 font-medium">ESTUDAMOS MARCAS QUE DOMINAM O FUTURO COMO:</p>
          <div className="flex justify-center">
            <img src={logos || "/placeholder.svg"} alt="Logos das empresas parceiras" className="h-8 sm:h-10 lg:h-12 opacity-70" />
          </div>
        </div>
      </div>

      {/* Right Section - Light Background with Form */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
            style={{
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3" style={{ color: "#49748A" }}>
              Biz One.
            </h2>
            <p className="text-gray-800 mb-6 sm:mb-8 text-lg sm:text-xl font-semibold leading-relaxed">
              Onde ideias que mudam o<br />
              jogo começam.
            </p>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Ex: Mariana Silva"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.nome ? 'border-red-500' : 'border-gray-200'
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
                  placeholder="Ex: mariana@email.com.br"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
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
                  placeholder="Ex: (11) 99900-0000"
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.telefone ? 'border-red-500' : 'border-gray-200'
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all ${
                    errors.dataNascimento ? 'border-red-500' : 'border-gray-200'
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
  );
}

export default BuzOne;