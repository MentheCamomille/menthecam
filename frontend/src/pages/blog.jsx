
const Blog = () => {
  return (
    <>
      <main className="bg-white text-gray-900">
        {/* Section Introduction */}
        <section className="text-center py-16 bg-gradient-to-b from-green-50 to-white">
          <h1 className="text-4xl font-bold text-green-700">Bienvenue sur le Blog de Menthecamomille</h1>
          <p className="mt-4 text-lg text-gray-700">Découvrez des histoires inspirantes et des techniques artisanales.</p>
        </section>

        {/* Section Articles */}
        <section className="py-12 px-8">
          <h2 className="text-3xl font-bold text-green-700">Les secrets de l'artisan crochet</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="shadow-md rounded-xl p-4">
              <h3 className="text-xl font-bold">Tendances crochet 2024</h3>
              <p className="text-gray-700">L'art du crochet en vogue cette année...</p>
            </article>
            <article className="shadow-md rounded-xl p-4">
              <h3 className="text-xl font-bold">L'impact écologique des matériaux artisanaux</h3>
              <p className="text-gray-700">Découvrez comment nos produits respectent...</p>
            </article>
          </div>
        </section>
      </main>

    </>
  );
};

export default Blog;