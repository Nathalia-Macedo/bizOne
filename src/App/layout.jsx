import MetaPixel from "../src/components/MetaPixel"

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Biz One - Onde ideias que mudam o jogo começam</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/bizmod-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/bizmod-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/bizmod-logo.png" />
        <link rel="shortcut icon" href="/bizmod-logo.png" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      'sans': ['Montserrat', 'sans-serif'],
                    }
                  }
                }
              }
            `,
          }}
        />

        {/* Meta Pixel Script Direto no Head - VERSÃO CORRIGIDA */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              
              // Aguardar o script carregar antes de inicializar
              window.addEventListener('load', function() {
                if (window.fbq) {
                  fbq('init', '1016075902193691');
                  fbq('track', 'PageView');
                }
              });
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1016075902193691&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
