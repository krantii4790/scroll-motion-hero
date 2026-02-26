import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dogImage from "../assets/dog.png";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "12K+", label: "Projects Delivered" },
  { value: "40+", label: "Industry Awards" },
  { value: "99%", label: "On-Time Delivery" },
];

const headline = "W E L C O M E  I T Z F I Z Z".split(" ");

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const overlayRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Initial load animation ──────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Headline words stagger in
      tl.from(".word-span", {
        y: 80,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: "expo.out",
      })
        // Stats slide up one by one
        .from(
          ".stat-item",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.4"
        )
        // Image scale + fade in
        .from(
          imageRef.current,
          {
            scale: 0.7,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.4)",
          },
          "-=1"
        )
        // Sub-line
        .from(
          ".sub-line",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        );

      // ── Scroll-based animation ──────────────────────────────────────────
      const section = sectionRef.current;

      // Image moves up & rotates as user scrolls
      gsap.to(imageRef.current, {
        y: -180,
        scale: 1.12,
        rotation: 6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Headline drifts upward
      gsap.to(titleRef.current, {
        y: -120,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "80% top",
          scrub: 1,
        },
      });

      // Stats fade out
      gsap.to(statsRef.current, {
        y: -60,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "50% top",
          scrub: 1,
        },
      });

      // Overlay darkens
      gsap.to(overlayRef.current, {
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Glow orb drifts
      gsap.to(glowRef.current, {
        y: -200,
        x: 60,
        scale: 1.4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Hero Section ──────────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-[#050508] flex flex-col justify-center items-center"
      >
        {/* Grain overlay */}
        <div className="grain-overlay" />

        {/* Ambient glow */}
        <div
          ref={glowRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,80,0,0.18) 0%, rgba(255,180,0,0.08) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Overlay for scroll darkening */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black opacity-0 pointer-events-none z-10"
        />

        {/* Dog / hero image */}
        <div
          ref={imageRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 will-change-transform"
          style={{ width: "clamp(300px, 36vw, 560px)" }}
        >
          <img
            src={dogImage}
            alt="hero visual"
            className="w-full object-contain drop-shadow-[0_0_80px_rgba(255,120,0,0.5)]"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center text-center px-6 select-none">
          {/* Eyebrow */}
          <p className="sub-line mb-6 text-xs tracking-[0.4em] text-orange-400 uppercase font-medium">
            Experience the Future
          </p>

          {/* Headline */}
          <div ref={titleRef} className="will-change-transform">
            <h1
              className="text-[clamp(2rem,6vw,6rem)] font-black leading-none tracking-widest text-white uppercase"
              style={{ fontFamily: "'Bebas Neue', 'Arial Black', sans-serif" }}
            >
              {headline.map((word, i) => (
                <span
                  key={i}
                  className="word-span inline-block overflow-hidden"
                  style={{ marginRight: "0.25em" }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p className="sub-line mt-4 text-sm tracking-[0.25em] text-gray-400 uppercase">
              Motion · Design · Experience
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-12 px-8 will-change-transform"
        >
          {stats.map((s, i) => (
            <div key={i} className="stat-item flex flex-col items-center">
              <span
                className="text-3xl font-black text-white tabular-nums"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {s.value}
              </span>
              <span className="text-[10px] tracking-widest text-gray-500 uppercase mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 sub-line">
          <span className="text-[9px] tracking-[0.3em] text-gray-600 uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── Below-fold content so scroll works ────────── */}
      <section className="min-h-screen bg-[#07070a] flex items-center justify-center">
        <p
          className="text-gray-600 tracking-[0.4em] text-xs uppercase"
          style={{ fontFamily: "sans-serif" }}
        >
          Your next section goes here
        </p>
      </section>
    </>
  );
}