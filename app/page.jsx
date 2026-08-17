"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------------------------------
 * DATA
 * ---------------------------------------------------------------------- */
const SCHOOLS = [
  { name: "St. Anthony's High School", years: "2017 – 2018", img: "/sahil-portfolio/images/school.png" },
  { name: "Viva College — B.Com", years: "2022 – 2023", img: "/sahil-portfolio/images/college.png" },
];

const JOBS = [
  {
    company: "SAI ASHIRWAD INFORMATIA",
    period: null,
    description:
      "Designed creative graphics and produced 2D animated content for medical education videos, helping simplify complex healthcare topics into easy-to-understand visual presentations.",
  },
  {
    company: "HOSPITALITY MINDS",
    period: "Currently working",
    description:
      "Graphic Designer & Video Editor at Hospitality Minds, creating engaging visual content for digital and print platforms, while also handling on-site photo and video shoots to support brand marketing.",
  },
];

const GRAPHIC_POSTS = [
  { src: "/sahil-portfolio/images/post-watch.jpg", alt: "Luxury Watch ad graphic" },
  { src: "/sahil-portfolio/images/post-white-clouds.jpg", alt: "White Clouds movie poster" },
  { src: "/sahil-portfolio/images/post-candyman.jpg", alt: "Solo Music Concert of Candy Man poster" },
  { src: "/sahil-portfolio/images/post-wedding.jpg", alt: "West Palm Beach Resort wedding venue ad" },
  { src: "/sahil-portfolio/images/post-firstsip.jpg", alt: "First Sip resort experience ad" },
  { src: "/sahil-portfolio/images/post-dubai.jpg", alt: "Study in Dubai promotional graphic" },
  { src: "/sahil-portfolio/images/post-meghalaya.jpg", alt: "Meghalaya's Weather resort ad" },
];

const VIDEO_EDITS = [
  { src: "/sahil-portfolio/images/video-gaming.jpg", alt: "Animated gaming lifestyle reel thumbnail" },
  { src: "/sahil-portfolio/images/video-wildpines.jpg", alt: "Wildpines property walkthrough reel thumbnail" },
  { src: "/sahil-portfolio/images/video-bundela.jpg", alt: "Explored Bundela travel reel thumbnail" },
  { src: "/sahil-portfolio/images/video-restaurant.jpg", alt: "Restaurant reel thumbnail" },
  { src: "/sahil-portfolio/images/video-hotelcare.jpg", alt: "Hotel housekeeping care reel thumbnail" },
  { src: "/sahil-portfolio/images/video-bachelor.jpg", alt: "Bachelor party event reel thumbnail" },
];

const ILLUSTRATIONS = [
  { src: "/sahil-portfolio/images/illust-whitecloud-girl.jpg", alt: "White Cloud anime-style character illustration" },
  { src: "/sahil-portfolio/images/illust-boba-cat.jpg", alt: "Boba tea cat character illustration" },
  { src: "/sahil-portfolio/images/illust-monkey.jpg", alt: "Cute monkey mascot illustration" },
  { src: "/sahil-portfolio/images/illust-hoodie-girl.jpg", alt: "Purple-haired character in hoodie illustration" },
  { src: "/sahil-portfolio/images/illust-sunglasses-portrait.jpg", alt: "Stylized portrait with orange sunglasses" },
];

/* -------------------------------------------------------------------------
 * ANIMATION VARIANTS
 * ---------------------------------------------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const heroWordLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const heroWordRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
};

/* -------------------------------------------------------------------------
 * SMALL PIECES
 * ---------------------------------------------------------------------- */

function SectionTab({ children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="flex justify-center mb-[-1.4rem] xs:mb-[-1.5rem] sm:mb-[-1.6rem] relative z-10"
    >
      <span className="section-tab font-display text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl">
        {children}
      </span>
    </motion.div>
  );
}

function GalleryGrid({ id, title, items, aspect }) {
  return (
    <section id={id} className="w-full bg-ink py-14 xs:py-16 sm:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
      <SectionTab>{title}</SectionTab>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full border border-white/30 rounded-2xl px-4 py-10 xs:px-5 xs:py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 2xl:px-16"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 xs:gap-6 sm:gap-7 lg:gap-8"
        >
          {items.map((item) => (
            <motion.figure
              key={item.alt}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative ${aspect} overflow-hidden rounded-lg bg-panel group`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * PAGE
 * ---------------------------------------------------------------------- */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <main className="w-full">
        {/* ---------------- HERO ---------------- */}
        <section
          id="top"
          className="relative w-full min-h-svh flex flex-col justify-end overflow-hidden pt-24 xs:pt-28 pb-0"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-cover bg-center grayscale"
            style={{ backgroundImage: "url('/sahil-portfolio/images/hero-bg.jpg')" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/50 to-ink"
          />

          <div className="w-full px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-between text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-[0.15em] xs:tracking-[0.2em] text-bolt mb-3 xs:mb-4"
            >
              <span>Graphic Designer</span>
              <span>Video Editor</span>
            </motion.div>

            <h1 className="font-display leading-[0.85] text-[15vw] xs:text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7.5vw] flex flex-wrap gap-x-3 xs:gap-x-4">
              <motion.span variants={heroWordLeft} initial="hidden" animate="show" className="text-brick">
                SAIL
              </motion.span>
              <motion.span variants={heroWordRight} initial="hidden" animate="show" className="outline-text">
                DHADVE
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="torn-edge mt-6 xs:mt-8"
            aria-hidden
          />
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="w-full bg-ink py-14 xs:py-16 sm:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-40">
          <SectionTab>HELLO I&apos;M A</SectionTab>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full border border-white/30 rounded-2xl px-5 py-10 xs:px-6 xs:py-12 sm:px-10 sm:py-14 md:px-16 md:py-16 lg:px-24 text-center"
          >
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl leading-relaxed font-semibold text-chalk/90">
              <span className="mark-red">Graphic Designer &amp; Video Editor</span>{" "}
              with over <span className="mark-red">4 years</span> of professional
              experience in creating impactful visual content and brand-focused
              designs. Specialized in Adobe Illustrator, Photoshop, and Premiere
              Pro, with strong expertise in visual storytelling, branding, and
              multimedia production. Experienced in producing unique and creative
              video content, engaging social media visuals, and high-quality
              marketing materials, along with actively managing{" "}
              <span className="mark-yellow">professional photo shoots and video shoots</span>{" "}
              from concept to final execution. Passionate about delivering
              aesthetically refined, result-driven designs while continuously
              growing and evolving in the creative industry.
            </p>
          </motion.div>
        </section>

        {/* ---------------- EDUCATION ---------------- */}
        <section id="education" className="w-full bg-ink py-14 xs:py-16 sm:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <SectionTab>MY EDUCATION</SectionTab>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full border border-white/30 rounded-2xl px-5 py-10 xs:px-6 xs:py-12 sm:px-10 sm:py-14 md:px-14 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 lg:gap-20"
          >
            {SCHOOLS.map((school) => (
              <motion.figure key={school.name} variants={fadeUp} className="relative text-center">
                <figcaption className="font-bold text-base xs:text-lg lg:text-3xl mb-3 xs:mb-4">
                  {school.name}
                </figcaption>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={school.img}
                  alt={school.name}
                  className="w-full max-w-xs xs:max-w-sm lg:max-w-2xl mx-auto object-contain"
                />
                <span className="block mt-2 text-chalk/60 text-xs lg:text-xl font-semibold">
                  {school.years}
                </span>
              </motion.figure>
            ))}
          </motion.div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section id="experience" className="w-full bg-ink py-14 xs:py-16 sm:py-20 lg:py-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
          <SectionTab>EXPERIENCE</SectionTab>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full border border-white/30 rounded-2xl px-5 py-10 xs:px-6 xs:py-12 sm:px-10 sm:py-14 md:px-14 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-5 xs:gap-6 lg:gap-10"
          >
            {JOBS.map((job) => (
              <motion.div
                key={job.company}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-brick rounded-2xl px-5 py-7 xs:px-6 xs:py-8 sm:px-7 sm:py-9 lg:px-10 lg:py-12 text-center bg-[#e6402e]"
              >
                <h3 className="font-bold text-yellow-300 text-lg xs:text-xl sm:text-2xl lg:text-4xl text-bolt mb-1 leading-tight">
                  {job.company}
                </h3>
                {job.period && (
                  <p className="font-display text-bolt text-base xs:text-lg lg:text-xl mb-3 xs:mb-4">
                    ( {job.period} )
                  </p>
                )}
                <p
                  className={`text-sm sm:text-base lg:text-2xl font-semibold text-chalk/95 leading-relaxed ${
                    !job.period ? "mt-4 xs:mt-5" : ""
                  }`}
                >
                  {job.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ---------------- WORK GALLERIES ---------------- */}
        <div id="work" className="w-full">
          <GalleryGrid id="graphic-posts" title="GRAPHIC POST" items={GRAPHIC_POSTS} aspect="aspect-[4/5]" />
          <GalleryGrid id="video-edits" title="VIDEOS EDIT" items={VIDEO_EDITS} aspect="aspect-[9/16]" />
          <GalleryGrid id="illustrator" title="ILLUSTRATOR" items={ILLUSTRATIONS} aspect="aspect-square" />
        </div>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer
        id="contact"
        className="relative w-full overflow-hidden pt-16 xs:pt-20 sm:pt-24 pb-8 xs:pb-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/sahil-portfolio/images/hero-bg.jpg')" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-black/50 to-black/30"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full text-center"
        >
          <h2 className="font-display leading-[0.85] text-[15vw] xs:text-[16vw] sm:text-[13vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7.5vw]">
            <span className="text-brick">THANK</span> <span className="outline-text">YOU</span>
          </h2>

          <div className="mt-8 xs:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 xs:gap-4 sm:gap-10 text-sm sm:text-base lg:text-lg font-semibold">
            <a
              href="tel:+918530809651"
              className="hover:text-bolt transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-bolt rounded"
            >
              +91 85308 09651
            </a>
            <span className="hidden sm:inline text-chalk/30">•</span>
            <a
              href="mailto:saildhadve2910@gmail.com"
              className="hover:text-bolt transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-bolt rounded"
            >
              saildhadve2910@gmail.com
            </a>
          </div>

          <p className="mt-8 xs:mt-10 text-xs lg:text-sm text-chalk/40">
            © {new Date().getFullYear()} Sail Dhadve. All rights reserved.
          </p>
        </motion.div>
      </footer>

     
    </>
  );
}