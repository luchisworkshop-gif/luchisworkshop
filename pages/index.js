import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-8 py-20">
        <h1 className="text-3xl font-bold mb-6">Lulusworkshop</h1>
        <p className="text-lg text-gray-700 mb-8">
          Gemelos artesanales hechos a mano en Madrid. Piezas únicas creadas con
          materiales de calidad y dedicación.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Colección</h2>
        <p className="text-gray-600 mb-6">
          Descubre una selección de gemelos elegantes y originales. Próximamente
          catálogo completo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-2">Cómo pedir</h2>
        <p className="text-gray-600">
          Elige tu modelo favorito en el catálogo y contáctame por WhatsApp o
          email para confirmar el pedido.
        </p>
      </main>
      <Footer />
    </>
  );
}
