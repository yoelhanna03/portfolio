"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-200 font-sans selection:bg-indigo-500 selection:text-white">
      {/* SECTION HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-radial from-slate-900 via-zinc-950 to-black px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-200 to-neutral-400 sm:text-7xl drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Yoël Hanna
          </h1>
          <div className="inline-block rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-sm font-medium text-indigo-400 backdrop-blur-sm sm:text-base tracking-wide shadow-inner">
            Full Stack Engineer
          </div>
        </div>

        <a
          href="#skills"
          className="absolute bottom-8 animate-bounce text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </section>

      {/* SECTION SKILLS */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-20 space-y-12 border-t border-neutral-900/50"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mes Skills
          </h2>
          <p className="text-neutral-400">
            Les technologies et langages que j'utilise pour donner vie aux
            projets.
          </p>
        </div>

        {/* Grille principale des compétences sur 2 colonnes en grand écran pour aérer le contenu */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* FRONTEND & AUTH */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900/20 p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>{" "}
              Frontend & Authentification
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/react/61DAFB"
                  alt="React"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  React
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/nextdotjs/ffffff"
                  alt="Next.js"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Next.js
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/auth0/EB5424"
                  alt="Auth.js"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Auth.js
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/betterauth/ffffff"
                  alt="Better Auth"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Better Auth
                </span>
              </div>
            </div>
          </div>

          {/* BACKEND & DATA */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900/20 p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>{" "}
              Backend & Gestion des données
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/tanstack/FF4154"
                  alt="TanStack Query"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  TanStack Query
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/prisma/2D3748"
                  alt="Prisma"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Prisma
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/postgresql/4169E1"
                  alt="PostgreSQL"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  PostgreSQL
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/socketdotio/010101"
                  alt="Socket.io"
                  className="w-5 h-5 invert"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Socket.io
                </span>
              </div>
            </div>
          </div>

          {/* DEVOPS & CLOUD */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900/20 p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span> DevOps
              & Cloud
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/git/F05032"
                  alt="Git"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Git (Version Control)
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/docker/2496ED"
                  alt="Docker"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Docker
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/vercel/ffffff"
                  alt="Vercel"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Vercel Deployment
                </span>
              </div>
              <div className="flex items-center gap-3 bg-neutral-900/40 p-2.5 rounded-xl border border-neutral-800/60">
                <img
                  src="https://cdn.simpleicons.org/vercel/0070F3"
                  alt="Vercel Blob"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-neutral-300">
                  Vercel Blob Storage
                </span>
              </div>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="rounded-2xl border border-neutral-900 bg-neutral-900/20 p-6 backdrop-blur-sm space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>{" "}
              Langages de programmation
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/typescript/3178C6"
                  alt="TypeScript"
                  className="w-5 h-5 mb-1"
                />
                <span className="text-xs font-medium text-neutral-300">
                  TypeScript
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/javascript/F7DF1E"
                  alt="JavaScript"
                  className="w-5 h-5 mb-1"
                />
                <span className="text-xs font-medium text-neutral-300">
                  JavaScript
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/python/3776AB"
                  alt="Python"
                  className="w-5 h-5 mb-1"
                />
                <span className="text-xs font-medium text-neutral-300">
                  Python
                </span>
              </div>
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/go/00ADD8"
                  alt="Go"
                  className="w-5 h-5 mb-1"
                />
                <span className="text-xs font-medium text-neutral-300">Go</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/c/A8B9CC"
                  alt="C"
                  className="w-5 h-5 mb-1"
                />
                <span className="text-xs font-medium text-neutral-300">C</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-neutral-900/40 p-3 rounded-xl border border-neutral-800/40 text-center">
                <img
                  src="https://cdn.simpleicons.org/rust/000000"
                  alt="Rust"
                  className="w-5 h-5 mb-1 invert"
                />
                <span className="text-xs font-medium text-neutral-300">
                  Rust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-20 space-y-12 border-t border-neutral-900/50"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mes Projets
          </h2>
          <p className="text-neutral-400">
            Une sélection d'applications et d'outils que j'ai conçus de A à Z.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* CARTE PROJET 1 : GESTIC */}
          <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/50 shadow-lg">
            <div className="flex flex-col h-full justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Gestic
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Micro-SaaS de stockage intelligent et de gestion d'alertes
                  administratives. Développé avec un focus sur l'UI/UX et la
                  sécurité des documents.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    Next.js 15
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    TailwindCSS
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    Prisma PostgreSQL
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    Vercel Blob
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm font-medium pt-2">
                <a
                  href="https://gestic-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1"
                >
                  Voir le site <span>→</span>
                </a>
                <a
                  href="https://github.com/yoelhanna03/Gestic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* CARTE PROJET 2 : CHOICELY */}
          <div className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900/50 shadow-lg">
            <div className="flex flex-col h-full justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Choicely
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Une plateforme faite pour vous aider dans vos choix
                  quotidiens. Que ce soit pour décider quoi manger, quel film
                  regarder ou quelle activité faire, Choicely vous propose des
                  suggestions basées sur vos préférences et votre historique.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    Next.js 16
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    TailwindCSS
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    Prisma PostgreSQL
                  </span>
                  <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded-md">
                    React
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm font-medium pt-2">
                <a
                  href="https://choicely.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1"
                >
                  Voir le site <span>→</span>
                </a>
                <a
                  href="https://github.com/yoelhanna03/choicely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-900 text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">Travaillons ensemble</h2>
        <p className="text-neutral-400 max-w-md mx-auto text-sm">
          Tu as un projet en tête ou tu souhaites simplement échanger sur la
          tech ? N'hésite pas à me contacter.
        </p>
        <div className="flex justify-center gap-4 pt-2">
          <a
            href="mailto:yoelhanna03@gmail.com"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            Me contacter par Email
          </a>
          <a
            href="https://github.com/yoelhanna03"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-900 transition-colors"
          >
            Mon GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
