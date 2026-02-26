import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const headlineRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // HEADLINE INTRO
      gsap.fromTo(
        headlineRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 1,
          ease: "power3.out",
        }
      );

      // STATS INTRO
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          delay: 0.6,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // SMOOTH SCROLL ANIMATION
      gsap.to(imageRef.current, {
  x: window.innerWidth * 0.4,
  rotation: 4,
  scale: 1.08,
  transformOrigin: "center center",
  ease: "power1.out",   // smoother motion curve
  scrollTrigger: {
    trigger: sectionRef.current,
    start: "top top",
    end: "+=1800",
    scrub: 2,           // 🔥 smooth interpolation
    pin: true,
    anticipatePin: 1,
  }
});

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ".split("");

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black px-6"
    >

      {/* HEADLINE */}
      <h1
        ref={headlineRef}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.3em] text-center text-white max-w-[1200px]"
      >
        {headline.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>

      {/* STATS */}
      <div className="flex flex-wrap justify-center gap-12 mt-12">
        {[
          { value: "95%", label: "Client Satisfaction" },
          { value: "120+", label: "Projects Delivered" },
          { value: "8+", label: "Years Experience" },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => (statsRef.current[index] = el)}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white">
              {stat.value}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE */}
      <img
        ref={imageRef}
        src="/ram.png"
        alt="Visual"
        className="mt-16 w-[350px] md:w-[450px] will-change-transform"
      />

    </section>
  );
}

export default Hero;