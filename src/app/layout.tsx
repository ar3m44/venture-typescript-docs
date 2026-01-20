export const metadata = {
  title: 'TypeScript Docs Generator',
  description: 'Загрузи TypeScript файлы — получи красивую документацию за 1 минуту',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}