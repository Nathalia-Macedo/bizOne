export default function LandingPage() {
    return (
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Dark Background with Texture */}
        <div
          className="lg:w-1/2 text-white p-8 lg:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden"
          style={{
            backgroundImage: "url(/background-texture.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Conteúdo principal centralizado */}
          <div className="flex-1 flex flex-col justify-center items-center relative">
            {/* Título principal com configurações exatas do Figma */}
            <div className="relative mt-16">
              {/* Logo posicionada sobre a primeira palavra */}
              <div className="absolute -top-20 left-20">
                <img src="/bizmod-logo.png" alt="Bizmod Logo" className="w-12 h-12" />
              </div>
  
              <h1
                className="font-semibold mb-12 text-white"
                style={{
                  fontSize: "32px",
                  lineHeight: "40px",
                  letterSpacing: "0%",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                  maxWidth: "645px",
                  textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div>
                  Em um <span className="bg-orange-500 rounded-sm">mundo de ideias</span>,
                </div>
                <div>
                  como não ser <span className="bg-orange-500 rounded-sm">igual a todo mundo</span>?
                </div>
              </h1>
            </div>
  
            {/* Nova ilustração dos dispositivos */}
            <div className="mb-8">
              <img
                src="/devices-illustration.png"
                alt="Dispositivos Biz One"
                className="w-[500px] lg:w-[700px] max-w-full h-auto"
              />
            </div>
  
            {/* Caixa glassmorphism com imagem real */}
            <div className="relative mb-8 max-w-xl">
              <img src="/glassmorphism-box.png" alt="Glassmorphism Box" className="w-full h-auto" />
              <div className="absolute inset-0 flex items-center justify-center px-14 py-10">
                <p className="text-sm lg:text-base font-medium text-white text-center" style={{ lineHeight: "1.4" }}>
                  <div>
                    Um produto Bizmod que usa <span className="font-bold text-white">Inteligência Global</span> para te
                  </div>
                  <div>ensinar a criar a ideia lucrativa que ninguém criou ainda.</div>
                </p>
              </div>
            </div>
          </div>
  
          {/* Logos das empresas parceiras */}
          <div className="mt-8">
            <p className="text-xs text-gray-300 mb-4 font-medium">ESTUDAMOS MARCAS QUE DOMINAM O FUTURO COMO:</p>
            <div className="flex justify-center">
              <img src="/partner-logos.png" alt="Logos das empresas parceiras" className="h-8 opacity-70" />
            </div>
          </div>
        </div>
  
        {/* Right Section - Light Background with Form */}
        <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <div
              className="bg-white rounded-2xl p-8"
              style={{
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 className="text-3xl font-bold mb-3" style={{ color: "#49748A" }}>
                Biz One.
              </h2>
              <p className="text-gray-800 mb-8 text-xl font-semibold leading-relaxed">
                Onde ideias que mudam o<br />
                jogo começam.
              </p>
  
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Ex: Mariana"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    placeholder="Ex: mariana@bizmod.com.br"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    placeholder="Ex: (11) 99900-0000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
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
  