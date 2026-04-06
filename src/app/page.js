export default function Home() {
  // A simple array of dummy data to make our HTML cleaner
  const products = [
    { id: 1, name: "Smart Meter v1", price: "฿2,500", desc: "Real-time power monitoring." },
    { id: 2, name: "Solar Transformer", price: "฿15,000", desc: "High-efficiency grid tie." },
    { id: 3, name: "Surge Protector", price: "฿850", desc: "Industrial grade safety." }
  ];

  return (
    <main className="mt-8">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800">Our Energy Products</h2>
        <p className="text-gray-500 mt-2">Reliable tech for the modern grid.</p>
      </header>

      {/* CSS Grid: 1 column on mobile, 3 columns on medium screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="h-32 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-400">
              [Image Placeholder]
            </div>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500 my-2">{item.desc}</p>
            <p className="font-semibold text-blue-600">{item.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}