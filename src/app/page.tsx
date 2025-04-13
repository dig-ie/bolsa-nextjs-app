import Sidebar from "@/components/SideBar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Sidebar/>
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Simulador</h1>
      <p className="mb-6 text-gray-700">Comece simulando seus investimentos</p>
      <Link
        href="/simulator"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Ir para o Simulador
      </Link>
    </main>
  );
}