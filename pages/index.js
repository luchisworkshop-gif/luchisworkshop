import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-8 py-20 text-center">
        {/* Logo grande centrado */}
        <img
          src="/images/logo.JPG"
          alt="Lulusworkshop"
          className="mx-auto mb-10 w-48"
        />
        <h1 className="text-3xl font-serif font-bold mb-6">
          Gemelos artesanales hechos a mano
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Piezas únicas creadas en Madrid con materiales de calidad y dedicación.
        </p>
      </main>
      <Footer />
    </>
  );
}
