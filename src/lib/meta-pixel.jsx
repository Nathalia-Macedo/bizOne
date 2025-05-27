// Eventos específicos para Meta Pixel
export const MetaEvents = {
    // Quando alguém visualiza a página
    pageView: () => {
      if (window.fbq) {
        window.fbq("track", "PageView")
      }
    },
  
    // Quando alguém inicia o cadastro
    initiateRegistration: () => {
      if (window.fbq) {
        window.fbq("track", "InitiateRegistration")
      }
    },
  
    // Quando alguém completa o cadastro
    completeRegistration: (userData) => {
      if (window.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "Cadastro Biz One",
          content_category: "Lead Generation",
        })
      }
    },
  
    // Quando alguém gera um lead
    lead: (userData) => {
      if (window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Lead Biz One",
          content_category: "Lead Generation",
          value: 1,
          currency: "BRL",
        })
      }
    },
  }
  