"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f2] text-black">

      {/* HEADER */}

      <header
        className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 transition-all duration-1000 ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="text-sm font-medium tracking-tight">
          BEZERRA WORLD
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-black/40">
          Index
        </div>
      </header>


      {/* CONTENT */}

      <section className="px-6 pb-32 pt-40">

        <div className="mx-auto max-w-7xl">

          {/* INTRO */}

          <div
            className={`mb-32 max-w-2xl transition-all duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >

            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              A collection of things
            </p>

            <h1 className="mt-6 text-4xl font-medium tracking-tight md:text-6xl">
              BEZERRA WORLD
            </h1>

          </div>


          {/* WORKS */}

          <div className="space-y-32">


            {/* WORK 01 */}

            <a
              href="/work/pe$0"
              className="group block transition-opacity duration-700 hover:opacity-70"
            >

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/40">
                    01
                  </p>

                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                    PE$0
                  </h2>

                </div>

                <span className="text-xs text-black/40 transition-transform duration-700 group-hover:translate-x-2">
                  →
                </span>

              </div>


              <div className="relative aspect-[16/9] overflow-hidden bg-black/5">

                <img
                  src="/hero.jpg"
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />

              </div>

            </a>


            {/* PLACEHOLDER 02 */}

            <div className="group cursor-pointer">

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/40">
                    02
                  </p>

                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                    Another space
                  </h2>

                </div>

                <span className="text-xs text-black/30">
                  →
                </span>

              </div>


              <div className="relative aspect-[16/9] overflow-hidden bg-black/5">

                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-black/20">
                  Future content
                </div>

              </div>

            </div>


            {/* PLACEHOLDER 03 */}

            <div className="group cursor-pointer">

              <div className="mb-5 flex items-end justify-between">

                <div>

                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/40">
                    03
                  </p>

                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                    Another world
                  </h2>

                </div>

                <span className="text-xs text-black/30">
                  →
                </span>

              </div>


              <div className="relative aspect-[16/9] overflow-hidden bg-black/5">

                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-black/20">
                  Future content
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-black/10 px-6 py-8">

        <div className="flex items-center justify-between text-xs text-black/40">

          <span>
            BEZERRA WORLD
          </span>

          <span>
            2026
          </span>

        </div>

      </footer>

    </main>
  );
}
