"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`min-h-screen bg-[#f5f5f2] text-black transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <header
        className={`flex items-center justify-between px-6 py-6 transition-all duration-1000 ${
          visible
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0"
        }`}
      >
        <a
          href="/"
          className="text-sm font-medium tracking-tight transition-opacity duration-500 hover:opacity-50"
        >
          BEZERRA WORLD
        </a>

        <span className="text-xs text-black/40">
          01
        </span>
      </header>

      <section className="px-6 pb-32 pt-24">
        <div className="mx-auto max-w-6xl">

          <div
            className={`mb-12 transition-all duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-black/40">
              01
            </p>

            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
              PE$0
            </h1>
          </div>

          <div
            className={`group relative aspect-video w-full overflow-hidden transition-all duration-[1400ms] ease-out ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-[1.04] opacity-0"
            }`}
          >
            <img
              src="/hero.jpg"
              alt=""
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
          </div>

          <div
            className={`mt-16 transition-all delay-300 duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Year
            </p>

            <p className="mt-2 text-sm">
              2026
            </p>
          </div>

          {/* MATRIOSKA */}

          <div className="mt-32 space-y-16">

            <a
              href="/work/pe$0/matrioska"
              className="group block"
            >
              <div className="mb-5 flex items-end justify-between">

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.25em] text-black/40">
                    Inside
                  </p>

                  <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                    MATRIOSKA
                  </h2>
                </div>

                <span className="text-xs text-black/40 transition-transform duration-700 group-hover:translate-x-2">
                  →
                </span>

              </div>

              <div className="relative aspect-[16/9] overflow-hidden bg-black/5">
                <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-black/20 transition-transform duration-1000 group-hover:scale-[1.03]">
                  Enter
                </div>
              </div>

            </a>

            <div>
              <a
                href="/"
                className="text-xs uppercase tracking-[0.2em] transition-opacity duration-500 hover:opacity-50"
              >
                Home
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
