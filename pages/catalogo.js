import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalogo() {
  return (
    <>
      <Header />
      <main className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>
      <Footer />
    </>
  );
}
