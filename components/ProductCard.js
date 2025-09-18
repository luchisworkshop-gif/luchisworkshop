export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition">
      <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.price}</p>
        <p className="text-sm mt-2">{product.description}</p>
      </div>
    </div>
  );
}
