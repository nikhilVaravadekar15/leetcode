import './globals.css'

export const metadata = {
  title: "Leetcode"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
      </head>
      <body className="bg-gray-900">
        {children}
      </body>
    </html>
  )
}
