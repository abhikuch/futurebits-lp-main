"use client";

import { useEffect, useRef } from "react";

const ORBITS = [
  { className: "is-wide", bitClassName: "is-square" },
  { className: "is-tall", bitClassName: "is-round" },
  { className: "is-offset", bitClassName: "is-bar" },
];

export default function HomeHeroAtom() {
  const atomRef = useRef(null);

  useEffect(() => {
    const atom = atomRef.current;

    if (!atom) {
      return undefined;
    }

    let isIntersecting = true;

    const updatePlayback = () => {
      atom.classList.toggle("is-paused", document.hidden || !isIntersecting);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.05 },
    );

    observer.observe(atom);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <div ref={atomRef} className="fb-home-atom is-paused" aria-hidden="true">
      <div className="fb-home-atom-field">
        <span className="fb-home-atom-axis is-horizontal" />
        <span className="fb-home-atom-axis is-vertical" />
        {ORBITS.map((orbit) => (
          <span key={orbit.className} className={`fb-home-atom-orbit ${orbit.className}`}>
            <span className="fb-home-atom-rotor">
              <span className={`fb-home-atom-bit ${orbit.bitClassName}`} />
            </span>
          </span>
        ))}
        <span className="fb-home-atom-core">
          <span />
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  );
}
