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
        </head>
        <body className="font-sans antialiased">{children}</body>
      </html>
    )
  }
  