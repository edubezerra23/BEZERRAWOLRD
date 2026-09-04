export default function AnjosDaCaraSuja() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-200 via-orange-300 to-orange-600">
      <div className="flex min-h-screen flex-col justify-between px-6 py-10 md:px-12 md:py-12">

        <div className="relative flex-1">

          <div className="absolute left-[4%] top-[5%]">
            <h1
              className="text-[clamp(4rem,14vw,13rem)] font-light leading-[0.75] tracking-[-0.06em] text-black"
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.55)",
                textShadow:
                  "0 0 8px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.12)",
              }}
            >
              ANJOS
            </h1>
          </div>

          <div className="absolute left-[22%] top-[28%]">
            <h1
              className="text-[clamp(4rem,14vw,13rem)] font-light leading-[0.75] tracking-[-0.06em] text-black"
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.55)",
                textShadow:
                  "0 0 8px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.12)",
              }}
            >
              DA
            </h1>
          </div>

          <div className="absolute left-[40%] top-[51%]">
            <h1
              className="text-[clamp(4rem,14vw,13rem)] font-light leading-[0.75] tracking-[-0.06em] text-black"
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.55)",
                textShadow:
                  "0 0 8px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.12)",
              }}
            >
              CAR
              <span className="relative -left-[0.035em]">A</span>
            </h1>
          </div>

          <div className="absolute left-[58%] top-[74%]">
            <h1
              className="text-[clamp(4rem,14vw,13rem)] font-light leading-[0.75] tracking-[-0.06em] text-black"
              style={{
                WebkitTextStroke: "0.6px rgba(255,255,255,0.55)",
                textShadow:
                  "0 0 8px rgba(255,255,255,0.35), 0 0 18px rgba(255,255,255,0.12)",
              }}
            >
              SUJA
            </h1>
          </div>

        </div>

        <div className="flex justify-center pt-12">
          <a
            href="/"
            className="text-sm font-light tracking-[0.25em] text-black transition-opacity duration-500 hover:opacity-50"
          >
            HOME
          </a>
        </div>

      </div>
    </main>
  );
}