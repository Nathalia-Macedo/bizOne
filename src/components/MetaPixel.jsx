"use client"

import { useEffect } from "react"

const PIXEL_ID = "1016075902193691"

export default function MetaPixel() {
  useEffect(() => {
    // Verificar se o pixel já foi carregado
    if (window.fbq) return // Carregar o Pixel do Facebook
    ;((f, b, e, v, n, t, s) => {
      if (f.fbq) return
      n = f.fbq = () => {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = !0
      n.version = "2.0"
      n.queue = []
      t = b.createElement(e)
      t.async = !0
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")

    // Inicializar o pixel
    window.fbq("init", PIXEL_ID)
    window.fbq("track", "PageView")

    // Adicionar noscript fallback
    const noscript = document.createElement("noscript")
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" />
    `
    document.head.appendChild(noscript)

    return () => {
      // Cleanup se necessário
      if (noscript && noscript.parentNode) {
        noscript.parentNode.removeChild(noscript)
      }
    }
  }, [])

  return null
}
