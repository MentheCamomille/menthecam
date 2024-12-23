

const About = () => {
  return (
    <>
      <main className="bg-white text-gray-900">
        {/* Section Présentation */}
        <section className="text-center py-16 bg-gradient-to-b from-green-50 to-white">
          <h1 className="text-4xl font-bold text-green-700">À propos de Menthecamomille</h1>
          <p className="mt-4 text-lg text-gray-700">Découvrez notre histoire et nos valeurs.</p>
        </section>

        <section className="mission py-8 px-8">
        <h2 className="text-2xl font-semibold text-green-700">Notre Mission</h2>
        <p className="text-gray-600 mt-4">Chez Menthecamomille, nous croyons en la création de produits respectueux de l'environnement et de grande qualité, qui apportent de la joie tout en prenant soin de notre planète.</p>
      </section>


        {/* Section Valeurs */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center text-green-700">Nos Valeurs</h2>
          <p className="mt-4 text-center text-gray-700">Nous croyons en un monde où la durabilité rencontre la créativité.</p>
          <div className="mt-8 flex justify-around text-center">
            <div>
              <h3 className="font-bold text-xl text-green-600">Durabilité</h3>
              <p className="text-gray-700">Des matériaux éco-responsables.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-green-600">Communauté</h3>
              <p className="text-gray-700">Soutien aux artisans locaux.</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-green-600">Créativité</h3>
              <p className="text-gray-700">Des designs uniques et originaux.</p>
            </div>
          </div>
        </section>

        {/* Section faq */}
        <section className="faq py-8 px-8 bg-gray-100">
        <h2 className="text-2xl font-semibold text-green-700">FAQ</h2>
        <div className="faq-item mt-4">
          <h3 className="text-lg font-medium">Quels matériaux utilisez-vous pour vos peluches ?</h3>
          <p className="text-gray-600">Nous utilisons des matériaux recyclés et écologiques pour toutes nos peluches, garantissant leur sécurité et leur durabilité.</p>
        </div>
        <div className="faq-item mt-4">
          <h3 className="text-lg font-medium">Où vos produits sont-ils fabriqués ?</h3>
          <p className="text-gray-600">Nos produits sont fabriqués localement avec un savoir-faire artisanal exceptionnel.</p>
        </div>
        <div className="faq-item mt-4">
          <h3 className="text-lg font-medium">Comment puis-je entretenir ma peluche ?</h3>
          <p className="text-gray-600">Nous recommandons un nettoyage à la main avec des produits doux pour préserver la qualité de la peluche.</p>
        </div>
      </section>

        {/* Section Contact */}
        <section className="py-12 bg-green-50">
          <h2 className="text-3xl font-bold text-center text-green-700">Contactez-nous</h2>
          <p className="text-center text-gray-700 mt-4">Envoyez-nous vos questions ou commentaires.</p>
          <div className="mt-6 flex justify-center">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full">Envoyer un message</button>
          </div>
        </section>
      </main>

    </>
  );
};

export default About;
