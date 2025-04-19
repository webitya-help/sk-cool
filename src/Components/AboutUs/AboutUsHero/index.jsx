'use client';

import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

export default function AboutHero() {
  return (
    <section
      className="relative w-full h-[75vh] md:h-[85vh] bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('/home/about.webp')",
      }}
    >
      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/80 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 text-white max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <EmojiObjectsIcon className="text-4xl text-yellow-400 drop-shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Who <span className="text-blue-400">We</span> Are
        </h1>

        <p className="text-lg md:text-xl mt-4 text-gray-200">
          At <strong>SK COOL Service</strong>, we’re not just technicians — we’re your home comfort partners. From ACs to appliances, we make service simple, fast, and trustworthy.
        </p>

        <p className="text-base md:text-lg italic mt-6 text-gray-300">
          “Driven by trust. Powered by service.”
        </p>
      </div>
    </section>
  );
}
