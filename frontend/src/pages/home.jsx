import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import AOS from 'aos'; // Importation de la bibliothèque AOS
import 'aos/dist/aos.css'; // Importation du fichier CSS d'AOS

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisation de AOS avec une durée de 1 seconde pour les animations
  }, []);

  return (
    <>

      <main className="bg-white text-gray-900">
        {/* Section Bienvenue */}
        <section
          className="text-center py-24 bg-gradient-to-b from-green-50 to-white" // Augmenté le padding vertical à 6rem (96px)
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-green-700">Bienvenue chez Menthecamomille</h1>
          <p className="mt-6 text-lg text-gray-700">Plongez dans un univers doux avec nos peluches artisanales, créatives et remplies de tendresse.</p>
          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full">Explorez notre collection</button>
            <button className="bg-white border border-green-500 text-green-500 px-8 py-3 rounded-full">En savoir plus</button>
          </div>
        </section>

        {/* Section Caractéristiques */}
        <section
          className="py-24" // Augmenté le padding vertical à 6rem (96px)
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-green-700">Les Caractéristiques Uniques</h2>
          <div className="mt-10 flex justify-around text-center">
            <div>
              <h3 className="font-bold text-xl text-green-600">Matériaux Recyclés</h3>
              <p className="text-gray-700">Respectueux de l'environnement.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-green-600">Artisanat Local</h3>
              <p className="text-gray-700">Soutien des communautés locales.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-green-600">Designs Uniques</h3>
              <p className="text-gray-700">Pensés avec amour pour les enfants.</p>
            </div>
          </div>
        </section>

        {/* Section Galerie (Carrousel) */}
        <section
          className="py-24 bg-green-50" // Augmenté le padding vertical à 6rem (96px)
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-green-700">Galerie de Nos Peluches</h2>
          <div className="mt-10">
            <Carousel />
          </div>
        </section>

        {/* Section Contact */}
        <section
          className="py-24" // Augmenté le padding vertical à 6rem (96px)
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-center text-green-700">Prêt à Découvrir Plus ?</h2>
          <p className="text-center text-gray-700 mt-6">Rejoignez notre univers enchanté de peluches personnalisées.</p>
          <div className="mt-8 flex justify-center gap-6">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full">Voir les Collections</button>
            <button className="bg-white border border-green-500 text-green-500 px-8 py-3 rounded-full">Contactez-nous</button>
          </div>
        </section>
      </main>

    </>
  );
};

export default Home;
