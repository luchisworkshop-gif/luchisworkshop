import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="text-center py-20">
        <h1 className="text-2xl font-bold">Contacto</h1>
        <p className="mt-4">WhatsApp: +34 600 000 000</p>
        <p>Email: contacto@lulusworkshop.com</p>
        <p>Instagram: @lulusworkshop</p>
      </main>
      <Footer />
    </>
  );
}
