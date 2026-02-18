import { mockProducts } from "../data/mockProducts";

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockProducts.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{item.name}</h2>
            <p>Price: ₹{item.price}</p>
            <p>Stock: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}