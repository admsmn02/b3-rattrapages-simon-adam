import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="hover:underline">
            Picard X IIM
          </Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <Link href="/Products" className="hover:underline">
            Produits
          </Link>
          <Link href="/Contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
