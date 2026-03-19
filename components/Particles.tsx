'use client';

type Particle = {
  id: number;
  size: string;
  left: string;
  duration: string;
  delay: string;
};

const PARTICLES: Particle[] = Array.from({ length: 18 }, (_, index) => {
  const seed = (index + 1) * 137.508;

  return {
    id: index,
    size: formatNumber(1 + pseudoRandom(seed) * 2),
    left: formatNumber(pseudoRandom(seed * 1.7) * 100),
    duration: formatNumber(12 + pseudoRandom(seed * 2.3) * 20),
    delay: formatNumber(pseudoRandom(seed * 2.9) * 15),
  };
});

export default function Particles() {
  return (
    <>
      {PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}vw`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function formatNumber(value: number) {
  return value.toFixed(4);
}
