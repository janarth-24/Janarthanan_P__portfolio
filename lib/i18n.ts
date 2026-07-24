// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

export const DICT = {
  picker: {
    season: { es: "Estación", en: "Season" },
    language: { es: "Idioma", en: "Language" },
  },
  seasons: {
    spring: { es: "Primavera", en: "Spring" },
    summer: { es: "Verano", en: "Summer" },
    autumn: { es: "Otoño", en: "Autumn" },
    winter: { es: "Invierno", en: "Winter" },
  },
  nav: {
    aria: { es: "Secciones", en: "Sections" },
    home: { es: "Inicio", en: "Home" },
    about: { es: "Sobre mí", en: "About me" },
    stack: { es: "Stack", en: "Stack" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Educación", en: "Education" },
    publications: { es: "Publicaciones", en: "Publications" },
    project: { es: "Proyecto", en: "Project" },
    contact: { es: "Contacto", en: "Contact" },
  },
  header: {
    availability: {
      es: "Open to opportunities",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I am" },
    roleLine: {
      es: "Software Developer • Full Stack • Flutter.",
      en: "Software Developer • Full Stack • Flutter.",
    },
    tagline: {
      es: "Especializado en aplicaciones frontend, backend y Flutter.",
      en: "Specialized in frontend, backend, and Flutter apps.",
    },
    cv: { es: "Descargar CV", en: "Download CV" },
    hire: { es: "Contactarme", en: "Contact me" },
    scroll: { es: "Scroll para explorar", en: "Scroll to explore" },
    keysHint: {
      es: "· hover sobre las teclas",
      en: "· hover over the keys",
    },
  },
  about: {
    title: { es: "About me", en: "About me" },
    subtitle: {
      es: "Un poco sobre quién soy.",
      en: "A little bit about who I am.",
    },
    body1: {
      es: "I am Janarthanan, a Pre-final Year Computer Science and Engineering student currently pursuing my Bachelor’s degree at Annai Mira College of Engineering and Technology, Vellore.",
      en: "I am Janarthanan, a Pre-final Year Computer Science and Engineering student currently pursuing my Bachelor’s degree at Annai Mira College of Engineering and Technology, Vellore.",
    },
    body2: {
      es: "I specialize in Frontend Development and work as a Freelance Frontend Developer, building responsive, visually appealing, and user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      en: "I specialize in Frontend Development and work as a Freelance Frontend Developer, building responsive, visually appealing, and user-friendly web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
    },
    body3: {
      es: "I also have working knowledge of Python, SQL, and Data Structures & Algorithms, which helps me write efficient, optimized, and scalable code and apply strong problem-solving techniques.",
      en: "I also have working knowledge of Python, SQL, and Data Structures & Algorithms, which helps me write efficient, optimized, and scalable code and apply strong problem-solving techniques.",
    },
    body4: {
      es: "As a final year student, I am actively seeking internship opportunities and freelance projects to gain hands-on industry experience and grow as a professional software developer.",
      en: "As a final year student, I am actively seeking internship opportunities and freelance projects to gain hands-on industry experience and grow as a professional software developer.",
    },
  },
  stack: {
    title: { es: "Tech Stack", en: "Tech Stack" },
    hint: {
      es: "(hint: pasa el ratón por una tecla)",
      en: "(hint: hover over a key)",
    },
    hintMobile: {
      es: "Las herramientas con las que construyo.",
      en: "The tools I build with.",
    },
  },
  experience: {
    title: { es: "Experience", en: "Experience" },
    subtitle: {
      es: "Mi trayectoria profesional.",
      en: "My professional journey.",
    },
    certificate: { es: "Ver Certificado", en: "View Certificate" },
  },
  education: {
    title: { es: "Education", en: "Education" },
    subtitle: {
      es: "Mi formación académica.",
      en: "My academic background.",
    },
  },
  publications: {
    title: { es: "Publications", en: "Publications" },
    subtitle: {
      es: "Mis artículos publicados.",
      en: "My published papers.",
    },
  },
  projects: {
    kicker: { es: "proyecto", en: "project" },
    viewMore: { es: "Ver más", en: "View more" },
    openSite: { es: "Abrir sitio", en: "Visit site" },
    viewCode: { es: "Ver código", en: "View code" },
    close: { es: "Cerrar", en: "Close" },
    stackLabel: { es: "Stack", en: "Stack" },
    overview: { es: "Resumen", en: "Overview" },
  },
  contact: {
    kicker: { es: "contacto", en: "contact" },
    title: { es: "¿Hablamos?", en: "Let's talk?" },
    body: {
      es: "Si lo que has visto te interesa, el teclado ya está listo para recibir el primer mensaje.",
      en: "If what you've seen interests you, the keyboard is ready for the first message.",
    },
    copyEmail: { es: "Copiar email", en: "Copy email" },
    openMail: { es: "Abrir mail", en: "Open mailto" },
    github: { es: "GitHub", en: "GitHub" },
    linkedin: { es: "LinkedIn", en: "LinkedIn" },
    emailToast: { es: "Email copiado", en: "Email copied" },
    footer: {
      es: "© 2026 Janarthanan. Todos los derechos reservados.",
      en: "© 2026 Janarthanan. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        es: "El lenguaje de la web interactiva.",
        en: "The language of the interactive web.",
      },
      html5: {
        es: "Los cimientos de cualquier página.",
        en: "The foundation of any web page.",
      },
      css: {
        es: "El diseño y estilo que le da vida.",
        en: "The design and styling that brings it to life.",
      },
      python: {
        es: "Simple, legible y poderoso para IA.",
        en: "Simple, readable, and powerful for AI.",
      },
      cplusplus: {
        es: "Rendimiento y control a bajo nivel.",
        en: "High performance and low-level control.",
      },
      react: {
        es: "Componentes dinámicos e interfaces rápidas.",
        en: "Dynamic components and fast interfaces.",
      },
      flutter: {
        es: "Desarrollo móvil multiplataforma hermoso.",
        en: "Beautiful cross-platform mobile development.",
      },
      dart: {
        es: "El motor detrás de las apps de Flutter.",
        en: "The engine driving Flutter apps.",
      },
      firebase: {
        es: "Backend rápido y servicios en tiempo real.",
        en: "Fast backend and real-time services.",
      },
      supabase: {
        es: "La alternativa open source de Firebase con SQL.",
        en: "The open source Firebase alternative with SQL.",
      },
      c: {
        es: "La base de los sistemas modernos.",
        en: "The foundation of modern systems.",
      },
      sqlite: {
        es: "Bases de datos ligeras y embebidas.",
        en: "Lightweight embedded databases.",
      },
      mysql: {
        es: "Gestión de bases de datos relacionales.",
        en: "Relational database management.",
      },
      git: {
        es: "Control de versiones y trabajo en equipo.",
        en: "Version control and teamwork.",
      },
      github: {
        es: "Donde el código abierto vive y colabora.",
        en: "Where open source lives and collaborates.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref.en ?? path;
  return path;
}
