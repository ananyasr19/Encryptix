"use client"
import Calculator from "@/components/calculator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Simple Calculator</h1>
      <Calculator />
    </main>
  )
}
