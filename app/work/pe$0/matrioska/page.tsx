"use client";

import { useEffect, useState } from "react";

export default function MatrioskaPage() {
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
      <header className="flex items-center justify-between px-6 py-6">
        <a
          href="/"
          className="text-sm font-medium tracking-tight transition-opacity duration-500 hover:opacity-50"
        >
          BEZERRA WORLD
        </a>

        <span className="text-xs text-black/40">
          01 / 01
        </span>
      </header>

      <section className="px-6 pb-32 pt-24">
        <div className="mx-auto max-w-6xl">

          <div
            className={`mb-24 transition-all duration-1000 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-black/40">
              Inside
            </p>

            <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
              MATRIOSKA
            </h1>
          </div>

          <div
            className={`transition-all delay-200 duration-1000 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="aspect-[16/10] w-full bg-black/5" />
          </div>

          <div className="mt-32">
            <a
              href="/"
              className="text-xs uppercase tracking-[0.2em] transition-opacity duration-500 hover:opacity-50"
            >
              Home
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
