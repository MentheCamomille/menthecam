
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-green-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-bold">Contactez-nous</p>
        <div className="mt-4 space-y-2">
          <p>Paris - 12 Rue de la Paix, 75001</p>
          <p>Lyon - 45 Rue de la République, 69002</p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:underline">Mentions légales</a>
          <a href="#" className="hover:underline">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
