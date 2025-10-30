"use client";

import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white relative min-h-screen w-screen flex flex-col items-center justify-center">
        <p className="text-lg font-bold uppercase tracking-[.3em] z-10 absolute top-12">
          Dossier Artistique
        </p>

        <div
          className="absolute inset-0 opacity-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/header-bg.jpg.png')" }}
        />
      </header>

      {/* Présentation */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2 mb-6">
          Presentation
        </h2>

        <div className="space-y-6">
          <p>
            VAiN&apos;AF est un groupe malgache composé de quatre artistes
            originaires de Tuléar. Leur musique se distingue par un mélange
            unique de punk, de pop rock et de rythmes traditionnels du sud de
            Madagascar.
          </p>
          <p>
            Leur ambition est de créer une musique authentique et énergique,
            tout en faisant résonner les voix de la jeunesse malgache
            contemporaine.
          </p>
          <p>
            Leurs textes abordent des thèmes profonds : lutte, transformation,
            héritage culturel et affirmation identitaire. En fusionnant le
            moderne et l&apos;ancré, VAiN&apos;AF offre un son percutant et sincère.
          </p>
        </div>

        {/* Espace spécifique de 12px */}
        <div className="my-20"></div>

        <img
          src="/images/presentation.jpg.png"
          alt="Présentation VAiN'AF"
          className="mx-auto rounded shadow-md w-full max-w-xl h-80 object-cover"
        />
      </section>

      {/* Univers Musical */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6 bg-white shadow">
        <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">
          Univers Musical
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="flex-1">
            VAiN’AF puise son inspiration dans les rythmes endiablés du tsapiky
            et banaiky, genre musical typique de cette région. Les membres de
            VAiN’AF ont su l’intégrer avec subtilité à des mélodies pop/punk
            rock entraînantes. Le résultat? Une musique innovante et dansante, à
            l’image de leur terre natale.
          </p>
          <img
            src="/images/univers1.jpg.png"
            alt="Univers musical"
            className="mx-auto rounded shadow-md w-full max-w-md h-60 object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="flex-1">
            Sur scène, VAiN’AF déploie une énergie contagieuse. Leur musique à
            la fois festive et engagée, aborde des thèmes variés tels que
            l’amour, la vie quotidienne, les problèmes de société ou encore la
            fierté de leur origines.
          </p>
          <img
            src="/images/univers2.jpg.png"
            alt="VAiN’AF sur scène"
            className="mx-auto rounded shadow-md w-full max-w-md h-60 object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="flex-1">
            VAiN’AF explore la culture malgache et celle du grand sud sous un
            angle nouveau. Leur musique, nourrie par les traditions et ouverte
            aux influences d’ailleurs, révèle toute la richesse et la diversité
            de Madagascar.
          </p>
          <img
            src="/images/univers3.jpg.png"
            alt="Culture malgache"
            className="mx-auto rounded shadow-md w-full max-w-md h-60 object-cover"
          />
        </div>
      </section>

      {/* Concerts & Evénements */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-6">
        <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">
          Concerts & Événements À Notre Actif
        </h2>
        <ul className="list-none space-y-2">
          <li>
            <strong>2025 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Fest’Iray à Antsirabe</li>
              <li>Festival de l’écologie à Antsirabe</li>
              <li>Concert au CRAAM à l&apos;Université d’Antananarivo</li>
              <li>Festival Indie Indri à l&apos;Alliance Française Antananarivo </li>
              <li>Concert au Madagascar Underground</li>
              <li>Concert à La Teinturerie</li>
              <li>Fête de la Musique au Vakok’Arts Trano</li>
            </ul>
          </li>
          <li>
            <strong>2024 :</strong>

            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Festival Vakok’Arts #3 à Tuléar</li>
              <li>Concert “’Zay Zany” au Vakok’Arts Trano à Tuléar </li>
            </ul>
          </li>
          <li>
            <strong>2023 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Tournée Nationale (Diego, Majunga, Antsirabe)</li>
              <li>Concert à La Teinturerie à Antananarivo</li>
              <li>Concert au No Comment Bar à Antananarivo</li>
              <li>Concert au Bar’Haingo à Antsirabe</li>
              <li>Festival Vakok’Arts #2 à Tuléar</li>
            </ul>
          </li>
          <li>
            <strong>2022 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Festival Vakok’Arts #1 à Tuléar </li>
            </ul>
          </li>
          <li>
            <strong>2019 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Résidence musicale “Le Grand Spectacle” avec Atsî-Mozika</li>
              <li> Festival “Hors les Murs” avec Atsî-Mozika</li>
              <li>Tournée Nationale avec Atsî-Mozika</li>
            </ul>
          </li>
          <li>
            <strong>2018 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>
                Résidence musicale “Le Sud revisité en Rock” avec Atsî-Mozika
              </li>
            </ul>
          </li>
          <li>
            <strong>2017 :</strong>
            <ul className="list-disc list-inside space-y-2 ml-10">
              <li>Résidence musicale “Musik’Ô Sud”</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Revue de Presse */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white shadow space-y-6">
        <h2 className="text-xl font-bold uppercase border-b-4 border-black pb-2">
          Revue de Presse
        </h2>
        <div className="flex flex-wrap gap-6">
          <p className="flex-1 min-w-[300px] mt-10">
            <strong>Article Midi Madagasikara</strong> - Dans le cadre du
            festival Indie Indri à Antananarivo
            <span className="block mt-1 text-gray-600">12 mai 2025</span>
          </p>
          <p className="flex-1 min-w-[300px]">
            <strong>Publication Facebook</strong> d&apos;Eddy Andrianarisoa (leader
            du groupe The Dizzy Brains)
          </p>
        </div>
        {/* Afficher le PDF */}
        <div className="mt-6">
          <iframe
            src="/pdf/revue_de_presse.pdf"
            className="w-full h-96 rounded-lg border"
            title="Revue de Presse VAiN'AF"
          />
          <div className="text-center mt-2">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Revue de Presse
                    </p>
                    <p className="text-sm text-gray-600">Document complet</p>
                  </div>
                </div>
                <a
                  href="/pdf/revue_de_presse.pdf"
                  download
                  className="px-4 py-2 bg-[#ef4444] text-white font-bold rounded-lg hover:bg-[#b91c1c] text-sm  transition-colors  no-underline"
                >
                  Télécharger
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section className="relative min-h-screen w-screen mx-auto px-0 py-16 space-y-8 text-center">
        <h2 className="text-4xl font-bold uppercase border-b-4 border-black pb-2">
          <span className="text-9xl align-super">M</span>
          <span className="text-9xl align-sub">E</span>
          <span className="text-9xl align-super">R</span>
          <span className="text-9xl align-sub">C</span>
          <span className="text-9xl align-super">I</span>
        </h2>

        <img
          src="/images/logo.jpg.png"
          alt="Logo VAiN'AF"
          className="mx-auto rounded shadow-md w-full h-full  object-cover"
        />
      </section>

      {/* Footer Principal */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section principale */}
          <h2 className="text-xl text-center font-semibold text-white mb-12">
            VAiN’AF Officiel | Site Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Informations de contact */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                CONTACT
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-yellow-400">📞</span>
                  <span>037 69 867 88 (Manager)</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-yellow-400">📞</span>
                  <span>+212 693-627305</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-yellow-400">📧</span>
                  <span>antoniochrystophe92@gmail.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-yellow-400">📧</span>
                  <span>vainaf601@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Useful Links */}

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                Réseaux Officiels
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.facebook.com/people/VAiNAF-Ofisialy/61572939357651/?mibextid=wwXIfr"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Facebook Officiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@VAiNAFOfficiel"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    YouTube Officiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/vainaf_officiel?igsh=engzMmE0dzc5MWky"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Instagram Officiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://soundcloud.com/vainaf601"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    SoundCloud Officiel
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1SLIiHN1fd0MFIYs5bC2LtEXny59kKaQA?usp=drive_link"
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
                    Press Kit (Google Drive)
                  </a>
                </li>
              </ul>
            </div>

            {/* Branding */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                VAiN&apos;AF
              </h3>
              <p className="text-gray-300 text-lg font-semibold">
                Groupe Musical Malgache
              </p>
              <p className="text-gray-400 mt-2">
                Punk • Pop Rock • Rythmes Traditionnels
              </p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Footer légal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              <p>
                <span className="text-yellow-400 font-bold">
                  Copyright © 2025
                </span>{" "}
                <span className="text-white font-bold">TROFEL</span>. All rights
                reserved.
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span className="text-yellow-400">⚠</span>
                Content licensed under:{" "}
                <span
                  className="text-yellow-400 font-bold cursor-help"
                  title="Partage autorisé, mais pas à des fins commerciales!"
                >
                  CC BY-NC-SA 4.0
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
