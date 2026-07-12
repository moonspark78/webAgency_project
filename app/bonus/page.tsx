import Image from "next/image"
import Link from "next/link"

const QUARTERFINALS = [
  {
    date: "9 juillet",
    team1: "Maroc",
    score1: 0,
    team2: "France",
    score2: 2,
    status: "Terminé",
    winner: "France",
  },
  {
    date: "10 juillet",
    team1: "Espagne",
    score1: null,
    team2: "Belgique",
    score2: null,
    status: "À venir",
    winner: null,
  },
  {
    date: "11 juillet",
    team1: "Norvège",
    score1: null,
    team2: "Angleterre",
    score2: null,
    status: "Aujourd'hui",
    winner: null,
  },
  {
    date: "12 juillet",
    team1: "Argentine",
    score1: null,
    team2: "Suisse/Colombie",
    score2: null,
    status: "À venir",
    winner: null,
  },
]

const HOST_CITIES = [
  { country: "États-Unis", cities: ["Atlanta", "Boston", "Dallas", "Houston", "Kansas City", "Los Angeles", "Miami", "New York/New Jersey", "Philadelphie", "San Francisco", "Seattle"] },
  { country: "Mexique", cities: ["Mexico", "Guadalajara", "Monterrey"] },
  { country: "Canada", cities: ["Toronto", "Vancouver"] },
]

export default function BonusPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="relative flex h-[50vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/wc-stadium.jpg"
          alt="Stade de la Coupe du Monde"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Coupe du Monde FIFA 2026
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl">
            11 juin – 19 juillet &middot; Canada &middot; États-Unis &middot; Mexique
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-4 py-12 sm:px-6 lg:px-8">
        {/* Infos clés */}
        <section className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "Équipes", value: "48" },
            { label: "Matchs", value: "104" },
            { label: "Villes hôtes", value: "16" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Phase actuelle */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Phase actuelle — Quarts de finale</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {QUARTERFINALS.map((qf) => (
              <div
                key={qf.date}
                className="rounded-xl border bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{qf.date}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      qf.status === "Terminé"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : qf.status === "Aujourd'hui"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {qf.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{qf.team1}</span>
                    <span className="text-lg font-bold">
                      {qf.score1 !== null ? qf.score1 : "–"}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600" />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{qf.team2}</span>
                    <span className="text-lg font-bold">
                      {qf.score2 !== null ? qf.score2 : "–"}
                    </span>
                  </div>
                </div>

                {qf.winner && (
                  <p className="mt-3 text-xs text-green-600 dark:text-green-400">
                    ✓ {qf.winner} qualifié en demi-finale
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Nouveau format */}
        <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <div className="relative z-10">
            <h2 className="mb-3 text-2xl font-bold">Un format inédit</h2>
            <p className="mb-4 max-w-2xl text-blue-100">
              Pour la première fois, 48 équipes réparties en 12 groupes de 4.
              Les deux premiers de chaque groupe et les huit meilleurs troisièmes
              accèdent aux seizièmes de finale, un tour inédit qui mène vers
              les huitièmes, quarts, demi-finales et la grande finale.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="block text-2xl font-bold">32</span>
                <span className="text-blue-200">Équipes en phase finale</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">7</span>
                <span className="text-blue-200">Tours à élimination directe</span>
              </div>
              <div>
                <span className="block text-2xl font-bold">19 juillet</span>
                <span className="text-blue-200">Finale au MetLife Stadium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Villes hôtes */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Villes hôtes et stades</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {HOST_CITIES.map((host) => (
              <div
                key={host.country}
                className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800"
              >
                <h3 className="mb-3 text-lg font-semibold">{host.country}</h3>
                <ul className="space-y-1">
                  {host.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Image fans */}
        <figure className="overflow-hidden rounded-xl">
          <Image
            src="/images/wc-fans.jpg"
            alt="Supporters dans un stade"
            width={1200}
            height={600}
            className="h-64 w-full object-cover sm:h-80"
          />
          <figcaption className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
            Ambiance des matchs de la Coupe du Monde 2026
          </figcaption>
        </figure>

        {/* Demi-finales preview */}
        <section className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold">Demi-finales à venir</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-4 dark:border-gray-700">
              <span>France</span>
              <span className="text-sm text-gray-500">vs</span>
              <span>Espagne / Belgique</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4 dark:border-gray-700">
              <span>Norvège / Angleterre</span>
              <span className="text-sm text-gray-500">vs</span>
              <span>Argentine / Suisse-Colombie</span>
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            &larr; Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
