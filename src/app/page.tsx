export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">TypeScript Docs Generator</h1>
      <p className="text-xl text-gray-600 mb-8">Загрузи TypeScript файлы — получи красивую документацию за 1 минуту</p>

      <div className="grid gap-4 max-w-2xl">
        <h2 className="text-2xl font-semibold">Возможности:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Auto-parse TS to docs</li>
          <li>Interactive playground</li>
          <li>Export HTML/PDF</li>
        </ul>
      </div>

      <div className="mt-12 p-6 bg-blue-50 rounded-xl text-center">
        <p className="text-3xl font-bold text-blue-600">499₽/месяц</p>
        <p className="text-gray-600">в месяц</p>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Купить
        </button>
      </div>
    </main>
  )
}