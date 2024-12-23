import React from "react";

function Products() {
  return (
    <div className="products-page">
      <section className="hero bg-green-50 text-center py-16">
        <h1 className="text-4xl font-bold text-green-700">Découvrez Notre Collection</h1>
        <p className="text-lg text-gray-600 mt-4">Explorez nos peluches écologiques et artisanales conçues avec soin pour vous et votre famille.</p>
      </section>

      <section className="products-grid grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/product1.jpg" alt="Peluche 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Peluche Lapin Vert</h2>
            <p className="text-gray-600">Fabriqué à partir de matériaux recyclés.</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Voir Détails</button>
          </div>
        </div>

        <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/product2.jpg" alt="Peluche 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Peluche Ours Brun</h2>
            <p className="text-gray-600">Conçu avec amour et respect de l'environnement.</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Voir Détails</button>
          </div>
        </div>

        <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
          <img src="/images/product3.jpg" alt="Peluche 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Peluche Renard</h2>
            <p className="text-gray-600">Un compagnon doux et écologique.</p>
            <button className="mt-4 bg-green-700 text-white px-4 py-2 rounded">Voir Détails</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
