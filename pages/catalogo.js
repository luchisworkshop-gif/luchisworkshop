import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";

export default function Catalogo() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="relative group cursor-pointer">
            <img
              src={p.images[0]}
              alt={p.name}
              className="w-full h-72 object-cover rounded shadow"
            />
            {/* Hover con “+” */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-4xl font-bold">+</span>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
