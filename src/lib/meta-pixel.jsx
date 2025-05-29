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
      window.fbq("track", "InitiateRegistration", {
        content_name: "Formulário Biz One",
        content_category: "Lead Generation",
      })
    }
  },

  // Quando alguém completa o cadastro
  completeRegistration: (userData) => {
    if (window.fbq) {
      window.fbq("track", "CompleteRegistration", {
        content_name: "Cadastro Biz One Completo",
        content_category: "Lead Generation",
        value: 1,
        currency: "BRL",
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

  // Evento de conversão na página de obrigado
  purchase: () => {
    if (window.fbq) {
      window.fbq("track", "Purchase", {
        content_name: "Conversão Biz One",
        content_category: "Conversion",
        value: 1,
        currency: "BRL",
      })
    }
  },
}
