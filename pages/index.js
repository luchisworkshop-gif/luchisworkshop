import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center py-20">
        <h1 className="text-3xl font-bold">Gemelos artesanales hechos a mano</h1>
        <p className="mt-4 text-gray-600">
          Bienvenido a Lulusworkshop — piezas únicas hechas con dedicación y materiales de calidad.
        </p>
        <Link href="/catalogo">
          <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg">
            Ver catálogo
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
