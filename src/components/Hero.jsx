import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dogImage from "../assets/dog.png";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const headlineRef = useRef(null);
  const statsRef = useRef([]);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {

    // existing animations...

    gsap.to(imageRef.current, {
      x: window.innerWidth * 0.4,
      rotation: 4,
      scale: 1.08,
      transformOrigin: "center center",
      ease: "power1.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1800",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
      }
    });

    ScrollTrigger.refresh();   // 🔥 ADD THIS

  }, sectionRef);

  return () => ctx.revert();
}, []);

  const headline = "WELCOME ITZFIZZ".split("");

  return (
    <section
  ref={sectionRef}
  className="min-h-[200vh] flex flex-col justify-center items-center relative overflow-hidden bg-black px-6"
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
  src={dogImage}
  alt="Visual"
  className="w-[600px] max-w-full"
/>

    </section>
  );
}

export default Hero;