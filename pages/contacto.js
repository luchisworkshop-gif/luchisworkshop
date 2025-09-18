import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto text-center py-20">
        <h1 className="text-3xl font-serif font-bold mb-6">Contacto</h1>
        <p className="text-gray-600 mb-10">
          Si quieres hacer un pedido o tienes alguna duda, contáctame fácilmente:
        </p>
        <div className="space-x-4">
          <a
            href="https://wa.me/34600000000"
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
          >
            WhatsApp
          </a>
          <a
            href="mailto:contacto@lulusworkshop.com"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Email
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
