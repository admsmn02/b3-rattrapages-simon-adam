import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 bg-gray-50">
      <header className="bg-white w-full py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-blue-900">
            Picard X IIM
          </h1>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-blue-800">
            Découvrez notre nouveau projet !
          </h2>
          <p className="mt-4 text-gray-600">
            Avec environ 1000 points de vente, l’entreprise Picard s’est imposée
            sur le marché de la distribution de produits alimentaires surgelés.
            Afin de toucher un nouveau public, Picard souhaite rendre son offre
            plus facilement accessible auprès des étudiants grâce à la mise en
            place de distributeurs réfrigérés permettant de vendre ses produits.
            C'est pourquoi Picard a décidé d'installer ses tout premiers
            distributeurs à l'IIM. Profitez-en bien !
          </p>
          <p className="mt-4 text-gray-600">
            Ces distributeurs réfrigérés offrent plusieurs avantages :
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Accès facile et rapide aux produits Picard</li>
            <li>Disponibilité 24/7</li>
            <li>Produits frais et de qualité</li>
            <li>Prix réadaptés aux budgets étudiants</li>
          </ul>
          <div className="mt-8">
            <Link href="/products">Voir nos produits disponibles</Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-5 mt-5 ">
          <img width={100} src="iim-logo.png" alt="" />
          <img width={100} src="picard-logo.png" alt="" />
        </div>
      </main>
      <footer className="bg-white w-full py-6 mt-8 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/contact">Contactez-nous</Link>
        </div>
      </footer>
    </div>
  );
}
