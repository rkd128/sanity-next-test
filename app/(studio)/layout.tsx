import '../globals.css'

export const metadata = {
  title: 'Underexposed',
  description: 'Building brands that connect your ideas to the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}