import Link from "next/link";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Découvrez notre nouveau projet !
          </h2>
          <p className="text-gray-700 mb-4">
            Avec environ 1000 points de vente, l’entreprise Picard s’est imposée
            sur le marché de la distribution de produits alimentaires surgelés.
            Afin de toucher un nouveau public, Picard souhaite rendre son offre
            plus facilement accessible auprès des étudiants grâce à la mise en
            place de distributeurs réfrigérés permettant de vendre ses produits.
            C'est pourquoi Picard a décidé d'installer ses tout premiers
            distributeurs à l'IIM. Profitez-en bien !
          </p>
          <p className="text-gray-700 mb-4">
            Ces distributeurs réfrigérés offrent plusieurs avantages :
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-700">
            <li>Accès facile et rapide aux produits Picard</li>
            <li>Disponibilité 24/7</li>
            <li>Produits frais et de qualité</li>
            <li>Prix réadaptés aux budgets étudiants</li>
          </ul>
          <div className="text-center">
            <Link
              href="/products"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Voir nos produits disponibles
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 mt-8">
          <img
            width={120}
            src="/iim-logo.png"
            alt="IIM Logo"
            className="object-contain"
          />
          <img
            width={120}
            src="/picard-logo.png"
            alt="Picard Logo"
            className="object-contain"
          />
        </div>
      </main>
      <footer className="bg-white py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/Contact" className="text-blue-600 hover:underline">
            Contactez-nous
          </Link>
        </div>
      </footer>
    </div>
  );
}
