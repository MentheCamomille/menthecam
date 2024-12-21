import React from "react";

function Home() {
    return (
      <div className="bg-cream min-h-screen py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-dark mb-6">
            Bienvenue sur Menthecamomille 🌱
          </h1>
          <p className="text-lg text-dark mb-4">
            Découvrez nos produits faits main avec amour et respect pour la nature.
          </p>
          <button className="bg-mint text-dark py-2 px-6 rounded shadow hover:bg-opacity-90">
            Explorer nos produits
          </button>
        </div>
      </div>
    );
  }
  
  export default Home;
  