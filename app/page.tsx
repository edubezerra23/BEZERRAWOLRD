"use client";

import { useEffect, useState } from "react";

const worlds = [
  {
    image: "/hero.jpg",
    link: "/work/ANJOS",
  },
  {
    image: "/hero.jpg",
    link: "/work/pe$0",
  },
  {
    image: "/hero.jpg",
    link: "/work/pe$0",
  },
  {
    image: "/hero.jpg",
    link: "/work/pe$0",
  },
];

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-[#0a0a0a] p-3 md:p-5">
      <div
        className={`flex h-full flex-col transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
          {worlds.map((world, index) => (
            <a
              key={index}
              href={world.link}
              className="group block min-h-0 overflow-hidden"
            >
              <div className="h-full w-full overflow-hidden">
                <img
                  src={world.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="shrink-0 pt-5 md:pt-6">
          <div className="h-px w-full bg-white/25" />

          <div className="relative mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
            <div className="flex justify-center">
              <span
                className="text-[16px] font-light tracking-[0.12em] text-white"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                by
              </span>
            </div>

            <div className="flex justify-center">
              <span
                className="text-[16px] font-light tracking-[0.12em] text-white"
                style={{
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                $ury.4
              </span>
            </div>

            <span
              className="absolute left-1/2 top-0 -translate-x-1/2 text-[16px] font-light tracking-[0.12em] text-white"
              style={{
                fontFamily: "var(--font-cormorant)",
              }}
            >
              bezerr.4
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}