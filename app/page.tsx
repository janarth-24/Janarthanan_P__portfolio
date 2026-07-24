"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LoadingScreen from "@/components/LoadingScreen";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import { useLanguage } from "@/components/LanguageProvider";
import { useIsMobile } from "@/lib/useIsMobile";
import { SKILLS_FLAT } from "@/lib/skills";
import type { Lang } from "@/lib/i18n";

const EMAIL = "janarthanangp24@gmail.com";

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
type Localised = { es: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section: "project1" | "project2" | "project3" | "project4";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      es: "Detección de Enfermedades en Plantas de Tomate",
      en: "Tomato Plant Disease Detection",
    },
    stack: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    desc: {
      es: "Modelo de deep learning para identificar múltiples enfermedades y predecir la pérdida de rendimiento.",
      en: "Deep learning model to identify multiple diseases and predict yield loss severity.",
    },
    details: {
      es: "Entrené un modelo de deep learning con imágenes de hojas de tomate para identificar múltiples enfermedades de plantas con alta precisión. Implementé un módulo de predicción de pérdida de rendimiento que estima la pérdida de producción basada en la severidad detectada, e integré el modelo con un backend en Flask para predicciones en tiempo real.",
      en: "Trained a deep learning model on tomato leaf images to identify multiple plant diseases with high prediction accuracy. Implemented a yield loss prediction module that estimates crop production loss based on the detected disease severity. Integrated the trained machine learning model with a Flask backend for real-time predictions.",
    },
    highlights: ["python", "javascript", "html5", "css"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      es: "NeuraLingua",
      en: "NeuraLingua",
    },
    stack: [
      "React.js",
      "Flask",
      "Python",
      "PostgreSQL",
      "SQLite",
      "JavaScript",
    ],
    desc: {
      es: "Plataforma de aprendizaje de inglés impulsada por IA con módulos interactivos.",
      en: "AI-Powered English Learning Platform featuring interactive modules.",
    },
    details: {
      es: "Contribuí al desarrollo de una plataforma de aprendizaje de inglés con IA, con módulos interactivos de Gramática, Escucha, Habla, Lectura, Escritura y Pensamiento Crítico. Desarrollé el frontend y backend usando React.js y Flask, asegurando una integración perfecta mediante APIs REST.",
      en: "Contributed to the development of an AI-powered English learning platform featuring interactive modules for Grammar, Listening, Speaking, Reading, Writing, Vocabulary, and Critical Thinking. Developed both frontend and backend functionalities using React.js and Flask, ensuring seamless integration between the user interface and REST APIs.",
    },
    highlights: ["react", "python", "postgresql", "javascript"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      es: "Sitio Web Master SK Academy",
      en: "Master SK Academy Website",
    },
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    desc: {
      es: "Sitio web educativo responsive para Master SK Academy con interfaz profesional.",
      en: "Responsive educational website for Master SK Academy with a professional UI.",
    },
    details: {
      es: "Desarrollé un sitio web educativo responsive para Master SK Academy, Vellore, usando HTML, CSS, JavaScript y Bootstrap. El sitio muestra listas de cursos, información académica y detalles de contacto con una interfaz de usuario limpia y profesional, optimizada para todos los dispositivos.",
      en: "Developed a responsive educational website for Master SK Academy, Vellore, using HTML, CSS, JavaScript, and Bootstrap. The website showcases course listings, academic information, and contact details with a clean and professional user interface, optimized for all devices.",
    },
    highlights: ["html5", "css", "javascript"],
    align: "left",
    section: "project3",
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
  certificates?: Array<{ label: Localised; url: string }>;
}> = [
  {
    role: { es: "Flutter Developer Intern", en: "Flutter Developer Intern" },
    company: "Starvik Solution Pvt Ltd",
    period: { es: "Junio 2026 — Julio 2026", en: "June 2026 — July 2026" },
    location: { es: "Vellore, India", en: "Vellore, India" },
    summary: {
      es: "Desarrollo de aplicaciones móviles multiplataforma usando Flutter y Dart.",
      en: "Developed cross-platform mobile applications using Flutter and Dart for Android and iOS.",
    },
    bullets: [
      {
        es: "Diseñé e implementé interfaces de usuario responsivas siguiendo Material Design.",
        en: "Designed and implemented responsive user interfaces following Material Design principles.",
      },
      {
        es: "Integré APIs REST y servicios de Firebase, incluyendo Autenticación y Cloud Firestore.",
        en: "Integrated REST APIs and Firebase services, including Authentication and Cloud Firestore.",
      },
    ],
    stack: ["Flutter", "Dart", "Firebase", "REST APIs"],
    certificates: [
      {
        label: { es: "Ver Certificado", en: "View Certificate" },
        url: "https://drive.google.com/file/d/1vKZOhTlWNUED2uZn-hiZbyHcxECY89ac/view?usp=sharing",
      }
    ],
  },
  {
    role: { es: "Full Stack Developer Intern", en: "Full Stack Developer Intern" },
    company: "NeuraGlobal",
    period: { es: "Febrero 2026 — Marzo 2026", en: "February 2026 — March 2026" },
    location: { es: "Vellore, India", en: "Vellore, India" },
    summary: {
      es: "Contribuí al desarrollo de Lingua AI, una plataforma de aprendizaje de idiomas basada en IA.",
      en: "Contributed to the development of Lingua AI, an AI-powered language learning platform by developing both frontend and backend features.",
    },
    bullets: [
      {
        es: "Desarrollé e integré módulos backend, APIs REST y bases de datos.",
        en: "Developed and integrated backend modules, REST APIs, and database operations.",
      },
      {
        es: "Colaboré para conectar los componentes frontend con los servicios backend.",
        en: "Collaborated with cross-functional teams to connect frontend components with backend services.",
      },
    ],
    stack: ["React", "Python", "REST APIs", "SQL"],
    certificates: [
      {
        label: { es: "Certificado de Experiencia", en: "Work Experience Certificate" },
        url: "https://drive.google.com/file/d/12RAcERrRLzKnFxccdTjIxlwUYuCJn8og/view?usp=sharing",
      },
      {
        label: { es: "Certificado de Pasantía", en: "Internship Certificate" },
        url: "https://drive.google.com/file/d/1Ck1yDUHHw-_tdB0_rtUbTGv1TID-avZX/view?usp=sharing",
      }
    ],
  },
  {
    role: { es: "AI & Cloud Intern", en: "AI & Cloud Intern" },
    company: "Edunet Foundation",
    period: { es: "Junio 2025 — Julio 2025", en: "June 2025 — July 2025" },
    location: { es: "Remoto", en: "Remote" },
    summary: {
      es: "Pasantía intensiva de 4 semanas sobre Inteligencia Artificial y Tecnologías Cloud.",
      en: "4-week internship focused on Artificial Intelligence and IBM Cloud Technologies.",
    },
    bullets: [
      {
        es: "Apliqué conceptos de machine learning y fundamentos de cloud para construir soluciones IA.",
        en: "Applied machine learning concepts and cloud computing fundamentals to build AI-based solutions.",
      },
      {
        es: "Experiencia práctica con flujos de IA, análisis de datos y desarrollo de aplicaciones.",
        en: "Gained hands-on experience with AI workflows, data analysis, and cloud-based app development.",
      },
    ],
    stack: ["AI", "IBM Cloud", "Python", "Machine Learning"],
    certificates: [
      {
        label: { es: "Ver Certificado", en: "View Certificate" },
        url: "https://drive.google.com/file/d/1k1cUnhRpOLbEhJC49ClVrAxweFuF4vdX/view?usp=sharing",
      }
    ],
  },
];

const education: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: { es: "Bachelor of Engineering (B.E.) – CSE", en: "Bachelor of Engineering (B.E.) – CSE" },
    company: "Annai Mira College of Engineering and Technology",
    period: { es: "2023 — 2027", en: "2023 — 2027" },
    location: { es: "Anna University", en: "Anna University" },
    summary: {
      es: "CGPA: 8.445/10",
      en: "CGPA: 8.445/10",
    },
    bullets: [],
    stack: [],
  },
  {
    role: { es: "Higher Secondary (Class XII)", en: "Higher Secondary (Class XII)" },
    company: "Dr. Natarajan Matric Hr. Sec. School",
    period: { es: "2023", en: "2023" },
    location: { es: "State Board", en: "State Board" },
    summary: {
      es: "Score: 80.5 %",
      en: "Score: 80.5 %",
    },
    bullets: [],
    stack: [],
  },
];

const publications: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: { es: "A Comprehensive Study of AI Applications in Kidney Disease", en: "A Comprehensive Study of AI Applications in Kidney Disease" },
    company: "ICCIS 3.0",
    period: { es: "Septiembre 2025", en: "September 2025" },
    location: { es: "Chennai, India", en: "Chennai, India" },
    summary: {
      es: "Published in the Proceedings of the Third International Conference on Cyber & Information Security (ICCIS 3.0).",
      en: "Published in the Proceedings of the Third International Conference on Cyber & Information Security (ICCIS 3.0).",
    },
    bullets: [
      {
        es: "Organized by the PG Department of Data Science, Dwaraka Doss Goverdhan Doss Vaishnav College.",
        en: "Organized by the PG Department of Data Science, Dwaraka Doss Goverdhan Doss Vaishnav College.",
      },
      {
        es: "ISBN: 978-93-94412-34-7",
        en: "ISBN: 978-93-94412-34-7",
      }
    ],
    stack: ["Artificial Intelligence", "Research", "Healthcare"],
  },
];

function pick<T>(loc: { es: T; en: T }, lang: Lang): T {
  return loc.en;
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const isMobile = useIsMobile();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      <SmoothScroll>
      <div className="relative">
        {/* Desktop: persistent 3D scene fullscreen behind content. On mobile
            the canvas lives inside the hero instead (see below) so it scrolls
            away and the rest of the page is clean, fast 2D. */}
        {!isMobile && (
          <div className="fixed inset-0 z-0">
            <FrozenKeyboard />
          </div>
        )}

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 md:px-14 py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 whitespace-nowrap"
            >
              Janarthanan P
            </span>
            {/* Wrapper (not the pill itself) carries the hide: .status-pill
                hard-sets display:inline-flex, which beats Tailwind's .hidden
                due to CSS source order, so hiding must happen on a parent. */}
            <span className="hidden md:inline-flex">
              <span className="status-pill">{t("header.availability")}</span>
            </span>
          </div>
          <div className="flex items-center gap-2 pointer-events-auto">
            <SeasonPicker />
            <span className="hidden md:inline-flex">
            <a
              href="https://github.com/Txemalon/3d-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            </span>
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            {/* Mobile-only 3D centerpiece. Lives inside the hero (scrolls away
                with it) and takes pointer events so keycaps are tappable. */}
            {isMobile && (
              <div className="w-full h-[34vh] mt-12 -mb-4 pointer-events-auto">
                <FrozenKeyboard mobile />
              </div>
            )}
            <div className="mt-2 md:mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-[14vw] md:text-[10vw] lg:text-[7.5vw] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92] mt-4 mb-2">
                <HeroWord text="Janarthanan P" delay={120} />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href={lang === "en" ? "/cv_en.pdf" : "/cv.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn frost-btn--primary"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                {/* Mobile-only full-width break: forces the social icons onto
                    their own row below the two primary buttons. Hidden on md+
                    so desktop keeps everything on a single line. */}
                <div className="basis-full h-0 md:hidden" aria-hidden />
                <a
                  href="https://www.linkedin.com/in/janarthanan-p-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/janarth-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-10 md:mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* About */}
          <section
            data-kb-section="about"
            className="relative py-24 md:min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-5xl relative mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
              <div className="flex-1 text-center md:text-left">
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {t("about.subtitle")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                    {t("about.title")}
                  </h2>
                </Reveal>
                <Reveal delay={160}>
                  <p className="text-ice-200 text-lg leading-relaxed mb-4">
                    {t("about.body1")}
                  </p>
                  <p className="text-ice-200 text-lg leading-relaxed mb-4">
                    {t("about.body2")}
                  </p>
                  <p className="text-ice-200 text-lg leading-relaxed mb-4">
                    {t("about.body3")}
                  </p>
                  <p className="text-ice-200 text-lg leading-relaxed mb-6 md:mb-10">
                    {t("about.body4")}
                  </p>
                </Reveal>
              </div>
              
              <Reveal delay={240} className="flex-none">
                <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-ice-700/30 shadow-[0_0_40px_rgba(234,242,251,0.1)] pointer-events-auto group">
                  <div className="absolute inset-0 bg-ice-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img
                    src="/profile.png"
                    alt="Janarthanan P"
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            </div>
          </section>

          {/* Stack — desktop relies on the 200vh scroll + sticky title while
              the keyboard does the talking on hover. On mobile (md:) that
              choreography is gone, so we drop the tall scroll and render a
              real, legible skills grid with the same taglines. */}
          <section
            data-kb-section="stack"
            className="relative md:min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative md:h-[150vh]">
              <div className="md:sticky md:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    <span className="hidden md:inline">{t("stack.hint")}</span>
                    <span className="md:hidden">{t("stack.hintMobile")}</span>
                  </p>
                </Reveal>
              </div>

              {/* Mobile skills grid (recovers the hover interaction as static
                  content the keyboard can't surface on touch). */}
              {isMobile && (
                <div className="md:hidden mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 pointer-events-auto">
                  {SKILLS_FLAT.map((s) => (
                    <div
                      key={s.slug}
                      className="flex items-start gap-3 rounded-xl bg-ink-1/70 backdrop-blur-sm border border-ink-3 p-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill={`#${s.hex}`}
                        className="flex-none mt-0.5"
                        aria-hidden
                      >
                        <path d={s.path} />
                      </svg>
                      <div>
                        <p className="text-ice-50 font-medium text-sm">
                          {s.title}
                        </p>
                        <p className="text-ice-400 text-xs mt-0.5 leading-snug">
                          {t(`keyboard.taglines.${s.slug}`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Experience — title is sticky at top-24 (feels anchored) but sits
              BEHIND the cards (z-0 vs. card wrapper's z-10), so as you scroll
              the card slides over the title. The section has no extra filler
              beyond the cards, so when you scroll past the last card the
              section ends and the title un-pins and exits the viewport at the
              same time — giving the "anchored then both disappear" feel. */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  {exp.certificates && exp.certificates.length > 0 && (
                    <div className="mt-6 pointer-events-auto flex flex-wrap gap-3">
                      {exp.certificates.map((cert, i) => (
                        <a
                          key={i}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="hover"
                          className="frost-btn frost-btn--primary !py-2 !px-4 text-xs font-medium inline-flex items-center gap-2"
                        >
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          {pick(cert.label, lang)}
                        </a>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative py-20 md:min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark hidden md:block top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : // Right-aligned cards get extra right padding on md+ so
                      // the action buttons ("Ver más") don't sit under the
                      // fixed SectionNav dots on the right edge. On mobile they
                      // collapse to a normal left-aligned full-width card.
                      "max-w-xl relative md:ml-auto md:text-right md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 md:justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex md:justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Education */}
          <section
            data-kb-section="education"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("education.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("education.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {education.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  {exp.bullets.length > 0 && (
                    <ul className="space-y-2.5 mb-6">
                      {exp.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-ice-100 leading-relaxed"
                        >
                          <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                          <span>{pick(b, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          data-cursor="hover"
                          className="frost-chip"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section
            data-kb-section="publications"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("publications.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("publications.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {publications.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  {exp.bullets.length > 0 && (
                    <ul className="space-y-2.5 mb-6">
                      {exp.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-ice-100 leading-relaxed"
                        >
                          <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                          <span>{pick(b, lang)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          data-cursor="hover"
                          className="frost-chip"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative py-24 md:min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-14 overflow-hidden pointer-events-auto"
          >
            <div className="w-full max-w-5xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-ice-700/30 bg-ink-1/80 backdrop-blur-xl relative z-10">
              {/* Left Side */}
              <div className="md:w-5/12 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-50 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Let's Chat</h2>
                  </Reveal>
                  <Reveal delay={80}>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                      Have a question, project idea, or internship opportunity?
                    </p>
                  </Reveal>
                  <Reveal delay={160}>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Feel free to contact me using the form.<br/>
                      I'll get back to you as soon as possible.
                    </p>
                  </Reveal>
                </div>
              </div>
              
              {/* Right Side */}
              <div className="md:w-7/12 p-8 md:p-12">
                <Reveal delay={240}>
                  <h3 className="text-2xl font-semibold text-ice-50 mb-8">Contact</h3>
                </Reveal>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Reveal delay={300}>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-ice-500/10 border border-ice-500/20 rounded-xl px-4 py-3 text-ice-50 placeholder-ice-400 focus:outline-none focus:border-ice-400 focus:ring-1 focus:ring-ice-400 transition-colors"
                    />
                  </Reveal>
                  <Reveal delay={360}>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-ice-500/10 border border-ice-500/20 rounded-xl px-4 py-3 text-ice-50 placeholder-ice-400 focus:outline-none focus:border-ice-400 focus:ring-1 focus:ring-ice-400 transition-colors"
                    />
                  </Reveal>
                  <Reveal delay={420}>
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full bg-ice-500/10 border border-ice-500/20 rounded-xl px-4 py-3 text-ice-50 placeholder-ice-400 focus:outline-none focus:border-ice-400 focus:ring-1 focus:ring-ice-400 transition-colors"
                    />
                  </Reveal>
                  <Reveal delay={480}>
                    <textarea 
                      placeholder="Message" 
                      rows={4}
                      className="w-full bg-ice-500/10 border border-ice-500/20 rounded-xl px-4 py-3 text-ice-50 placeholder-ice-400 focus:outline-none focus:border-ice-400 focus:ring-1 focus:ring-ice-400 transition-colors resize-none"
                    ></textarea>
                  </Reveal>
                  <Reveal delay={540}>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)] mt-2"
                    >
                      Submit
                    </button>
                  </Reveal>
                </form>
                
                <Reveal delay={600}>
                  <div className="mt-10 flex justify-center gap-4">
                    <CopyEmail email={EMAIL} className="frost-icon !rounded-full">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                    </CopyEmail>
                    <a href="https://github.com/janarth-24" target="_blank" rel="noopener noreferrer" className="frost-icon !rounded-full">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/janarthanan-p-/" target="_blank" rel="noopener noreferrer" className="frost-icon !rounded-full">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
        <SectionNav />
      </div>
    </SmoothScroll>
    </>
  );
}
