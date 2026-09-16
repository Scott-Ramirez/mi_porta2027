export const personalInfo = {
  name: "Anthony Scott Ramirez Sias",
  shortName: "Anthony Scott",
  title: "Desarrollador Backend & DevOps Junior (Linux, Docker, Node.js)",
  roles: [
    "Backend Developer",
    "Node.js & NestJS Specialist",
    "Linux & Docker Home-Server Admin",
    "Python Automation Engineer",
    "Flutter Multiplatform Developer"
  ],
  bio: "Profesional Técnico en Ingeniería de Software graduado de SENATI. Me especializo como Desarrollador Backend e infraestructura, con experiencia práctica en administración de servidores Linux (Ubuntu Server), contenedorización con Docker y despliegues seguros con Cloudflare Tunnels (cloudflared). Desarrollo APIs RESTful escalables con Node.js y NestJS, automatizo tareas críticas, copias de seguridad de bases de datos (PostgreSQL, MySQL, MongoDB) y redespliegues con scripts de Python, y construyo aplicaciones multiplataforma con Flutter.",
  location: "Perú",
  availability: "Disponible para contratación & proyectos",
  email: "anthonyscottramirez@gmail.com",
  phone: "+51 920569220",
  whatsappUrl: "https://wa.me/51920569220?text=Hola%20Anthony,%20vi%20tu%20perfil%20como%20Desarrollador%20Backend%20y%20DevOps%20y%20me%20gustar%C3%ADa%20conversar.",
  photo: "/img/Yo.png",
  photoSecondary: "/img/yo-soy.png",
  github: "https://github.com/Scott-Ramirez",
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Técnico (Lectura de documentación)" }
  ],
  stats: [
    { label: "Enfoque Principal", value: "Backend & DevOps" },
    { label: "Infraestructura", value: "Linux & Docker" },
    { label: "Automatización", value: "Python Scripts" },
    { label: "Formación", value: "SENATI" }
  ]
};

export const skillsData = {
  backend: [
    { name: "Node.js & npm", icon: "Server", description: "Desarrollo de servidores asíncronos de alto rendimiento, APIs RESTful y gestión modular de dependencias con npm." },
    { name: "NestJS", icon: "Boxes", description: "Arquitectura modular para APIs RESTful, controladores desacoplados, servicios e inyección de dependencias." },
    { name: "Diseño & Construcción de APIs REST", icon: "Network", description: "Diseño de endpoints escalables, arquitectura limpia, autenticación JWT, middlewares y control de errores." },
    { name: "Python para Automatización & Backend", icon: "Terminal", description: "Desarrollo de scripts de mantenimiento para servidores, automatización de tareas de sistema, APIs y procesamiento de datos." }
  ],
  devopsAndInfra: [
    { name: "Ubuntu Server & Linux SysAdmin", icon: "Terminal", description: "Instalación, configuración y mantenimiento de servidores caseros (Home Server), gestión de usuarios, permisos y SSH." },
    { name: "Docker & Docker Compose", icon: "Boxes", description: "Contenedorización de aplicaciones en contenedores, aislamiento de aplicaciones, gestión de volúmenes persistentes y redes internas." },
    { name: "Cloudflare Tunnels (cloudflared)", icon: "Cloud", description: "Exposición pública segura de servicios locales sin apertura de puertos en router, con cifrado SSL y protección perimetral." },
    { name: "Automatización de Backups & Redespliegues", icon: "Cpu", description: "Scripts en Python y Bash para copias de seguridad automatizadas de bases de datos, rotación de backups y redespliegue de contenedores." }
  ],
  databases: [
    { name: "PostgreSQL", icon: "Database", description: "Modelado relacional avanzado, integridad referencial, consultas optimizadas, transacciones ACID y backups programados." },
    { name: "MySQL & MariaDB", icon: "Database", description: "Diseño de esquemas, normalización, procedimientos almacenados y automatización de respaldos periódicos con scripts." },
    { name: "MongoDB", icon: "HardDrive", description: "Bases de datos NoSQL documentales, consultas flexibles, indexación y almacenamiento de estructuras JSON." },
    { name: "SQLite", icon: "FileCode", description: "Base de datos embebida ligera para aplicaciones locales, prototipos rápidos y entornos multiplataforma." }
  ],
  flutterApps: [
    { name: "Flutter para Móviles (Android & iOS)", icon: "Smartphone", description: "Desarrollo de aplicaciones móviles con Dart, consumo de APIs RESTful, gestión de estado y diseño responsivo." },
    { name: "Flutter para Escritorio (Desktop)", icon: "Laptop", description: "Creación de aplicaciones nativas de escritorio (Windows/Linux) con interfaz moderna y sincronización de datos." }
  ],
  frontend: [
    { name: "React.js & Next.js", icon: "Code2", description: "Desarrollo de interfaces reactivas, Server-Side Rendering (SSR), App Router y consumo eficiente de APIs." },
    { name: "JavaScript (ES6+) & TypeScript", icon: "FileCode2", description: "Programación orientada a objetos, código tipado, manipulación avanzada del DOM y lógica de negocio." },
    { name: "HTML5 & CSS3 Moderno", icon: "Palette", description: "Maquetación semántica, Flexbox, Grid, diseño responsivo y estilos limpios adaptables." }
  ],
  creativity3D: [
    { name: "Blender (Modelado 3D)", icon: "Box", description: "Nivel intermedio: modelado 3D de piezas y props, texturizado básico, optimización de topología y exportación a motores." },
    { name: "Unity", icon: "Gamepad2", description: "Nivel básico: scripting con C#, manejo de físicas, configuración de jerarquías y prototipado interactivo." },
    { name: "Unreal Engine", icon: "Zap", description: "Nivel básico: nociones de Blueprints, iluminación y exploración del motor." }
  ],
  tools: [
    { name: "Git & GitHub", icon: "GitBranch", description: "Control de versiones distribuido, ramas, Pull Requests y flujo de trabajo colaborativo." },
    { name: "Postman", icon: "Send", description: "Pruebas de endpoints REST, simulación de llamadas HTTP, automatización de pruebas y documentación de APIs." },
    { name: "VS Code & Bash Terminal", icon: "Terminal", description: "Entorno de desarrollo altamente optimizado y navegación fluida por línea de comandos Linux." },
    { name: "Jira / Metodologías Ágiles", icon: "CheckSquare", description: "Gestión de tareas y seguimiento de entregas bajo marcos ágiles (Scrum/Kanban)." }
  ]
};

export const projectsData = [
  {
    id: "servidor-casero-infra",
    title: "Infraestructura Home-Server & Automatización con Python y Docker",
    category: "DevOps & Automatización",
    badge: "Linux & Docker",
    summary: "Servidor casero con Ubuntu Server, Docker y Cloudflare Tunnels, con scripts de Python para backups de BD automáticos y redespliegue de apps.",
    description: "Configuración integral de un servidor propio (Home Server) bajo Ubuntu Server. Contenedorización de múltiples servicios con Docker y Docker Compose, exposición pública segura mediante Cloudflare Tunnels (cloudflared) sin abrir puertos de red. Creación de scripts propios en Python que generan backups automáticos de bases de datos (PostgreSQL, MySQL), rotan respaldos históricos y automatizan el redespliegue de contenedores tras nuevas versiones.",
    image: "/img/proyectos/proyecto1.png",
    technologies: ["Ubuntu Server", "Docker", "cloudflared", "Python Scripts", "PostgreSQL", "MySQL", "Bash"],
    demoUrl: "#",
    githubUrl: "https://github.com/Scott-Ramirez",
    featured: true
  },
  {
    id: "backend-apis-nest",
    title: "Arquitectura de APIs RESTful con Node.js & NestJS",
    category: "Backend & APIs",
    badge: "Node.js & NestJS",
    summary: "Servicios backend modulares con arquitectura limpia, autenticación JWT y persistencia en bases de datos relacionales y NoSQL.",
    description: "Desarrollo de servicios backend robustos empleando NestJS y Node.js. Implementación de controladores, servicios desacoplados, validación de DTOs, autenticación basada en tokens y conexión optimizada a bases de datos relacionales (PostgreSQL) y documentales (MongoDB).",
    image: "/img/proyectos/chatbot.png",
    technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs"],
    demoUrl: "#",
    githubUrl: "https://github.com/Scott-Ramirez",
    featured: true
  },
  {
    id: "apps-flutter",
    title: "Aplicaciones Multiplataforma con Flutter (Móvil & Desktop)",
    category: "Móvil & Desktop",
    badge: "Flutter & Dart",
    summary: "Desarrollo de aplicaciones multiplataforma para móviles y escritorio conectadas a servicios y APIs REST.",
    description: "Construcción de aplicaciones multiplataforma con interfaces dinámicas construidas en Flutter y Dart. Conexión a endpoints RESTful mediante clientes HTTP para sincronización de datos en tiempo real y compatibilidad nativa tanto en smartphones como en entornos de escritorio.",
    image: "/img/proyectos/proyecto3.png",
    technologies: ["Flutter", "Dart", "REST APIs", "Android", "Desktop App"],
    demoUrl: "#",
    githubUrl: "https://github.com/Scott-Ramirez",
    featured: true
  }
];

export const certificationsData = [
  {
    title: "Introducción a la Ciberseguridad",
    issuer: "Cisco Networking Academy",
    date: "Certificación Oficial",
    icon: "ShieldCheck",
    badge: "Cybersecurity",
    link: "https://drive.google.com/file/d/1UM-7TQ8idvlc7zoFAQKpB3_iMfvPYKLU/view?usp=share_link"
  },
  {
    title: "Introduction to IoT (Internet of Things)",
    issuer: "Cisco Networking Academy",
    date: "Certificación Oficial",
    icon: "Wifi",
    badge: "IoT",
    link: "https://drive.google.com/file/d/12CK8Zz5y7uemvMbdrowOvV12OxavSzDN/view?usp=share_link"
  },
  {
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "Certificación Oficial",
    icon: "Network",
    badge: "Redes",
    link: "https://drive.google.com/file/d/1BqZZOOfHJ05Ta8zebTATySy6yWS6qBB5/view?usp=share_link"
  },
  {
    title: "Entrepreneurship",
    issuer: "Cisco Networking Academy",
    date: "Certificación Oficial",
    icon: "Rocket",
    badge: "Negocios",
    link: "https://drive.google.com/file/d/1KXFdxHKLUwuSQWB1eQl5Hqxv3xAOcpiB/view?usp=share_link"
  },
  {
    title: "Get Connected",
    issuer: "Cisco Networking Academy",
    date: "Certificación Oficial",
    icon: "Radio",
    badge: "Telecomunicaciones",
    link: "https://drive.google.com/file/d/11BIm_Y7Jq5NMbPYSuS9Qfya06PtvhBia/view?usp=share_link"
  }
];

// Solo nivel superior: SENATI
export const educationData = [
  {
    institution: "SENATI",
    degree: "Profesional Técnico en Ingeniería de Software con Inteligencia Artificial",
    period: "Graduado / Titulado",
    status: "Concluido",
    icon: "GraduationCap"
  }
];
