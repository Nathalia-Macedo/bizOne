import { useEffect } from "react"

const PIXEL_ID = "1016075902193691"

export default function MetaPixel() {
  useEffect(() => {
    // Verificar se já foi carregado
    if (window.fbq) {
      return
    }

    // Carregar o script do Facebook Pixel
    const script = document.createElement("script")
    script.async = true
    script.src = "https://connect.facebook.net/en_US/fbevents.js"

    script.onload = () => {
      // Inicializar o pixel após o script carregar
      if (window.fbq) {
        window.fbq("init", PIXEL_ID)
        window.fbq("track", "PageView")

        // Disparar PageView adicional após 1 segundo para garantir
        setTimeout(() => {
          window.fbq("track", "PageView")
        }, 1000)
      }
    }

    // Criar a função fbq antes de carregar o script
    window.fbq =
      window.fbq ||
      (() => {
        ;(window.fbq.q = window.fbq.q || []).push(arguments)
      })
    window.fbq.push = window.fbq
    window.fbq.loaded = true
    window.fbq.version = "2.0"
    window.fbq.queue = []

    // Adicionar o script ao head
    document.head.appendChild(script)

    // Adicionar noscript fallback
    const noscript = document.createElement("noscript")
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />
    `
    document.head.appendChild(noscript)

    // Cleanup
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (noscript && noscript.parentNode) {
        noscript.parentNode.removeChild(noscript)
      }
    }
  }, [])

  return null
}
