export type Show = {
  id: string;
  date: string;
  isoDate?: string;
  city: string;
  venue: string;
  title: string;
  description: string;
  image?: string;
  ticketUrl?: string;
  ticketLabel?: string;
  status?: "confirmado" | "agotado" | "anunciado";
};

export type ClassEntry = {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  format: "regular" | "intensivo" | "workshop" | "masterclass" | "privada";
  location: string;
};

export type Workshop = {
  id: string;
  date: string;
  city: string;
  title: string;
  description: string;
  image?: string;
  contactUrl?: string;
};

export const upcomingShows: Show[] = [
  // Editable list — agrega aquí las próximas funciones.
];

export const recentWorkshops: Workshop[] = [
  {
    id: "ws-comodoro-2019",
    date: "21–22 sept",
    city: "Comodoro Rivadavia",
    title: "Seminario intensivo",
    description:
      "Dos jornadas dedicadas al baile flamenco — técnica, musicalidad y compás.",
    image: "/workshops/triana.jpg",
  },
  {
    id: "ws-entrerios-2019",
    date: "25–26 sept",
    city: "Entre Ríos",
    title: "Workshop",
    description:
      "Encuentro de fin de semana en Entre Ríos: trabajo coreográfico y dinámicas grupales.",
    image: "/workshops/entrerios.jpg",
  },
  {
    id: "ws-bsas-2019",
    date: "5 octubre",
    city: "Buenos Aires · Barrio Norte",
    title: "Masterclass",
    description: "Una clase magistral abierta para profundizar en el cante y el baile.",
    image: "/workshops/masterclass.jpg",
  },
];

export const regularClasses: ClassEntry[] = [
  {
    id: "cls-mar-1",
    day: "Martes",
    time: "19:00 — 20:00",
    title: "Clase general",
    description: "Con guitarra. Apertura a todo nivel.",
    format: "regular",
    location: "Estudio Rocamora 4077, casa 1 · Buenos Aires",
  },
  {
    id: "cls-mar-2",
    day: "Martes",
    time: "20:00 — 21:00",
    title: "Clase general",
    description: "Con guitarra. Continuación / nivel intermedio.",
    format: "regular",
    location: "Estudio Rocamora 4077, casa 1 · Buenos Aires",
  },
  {
    id: "cls-mie-1",
    day: "Miércoles",
    time: "14:00 — 15:30",
    title: "Clase general",
    description: "Con guitarra. Sesión extendida de tarde.",
    format: "regular",
    location: "Estudio Rocamora 4077, casa 1 · Buenos Aires",
  },
  {
    id: "cls-priv",
    day: "A convenir",
    time: "—",
    title: "Clases especializadas",
    description:
      "Individuales y grupales. Trabajo personalizado para procesos artísticos, repertorio y preparación escénica.",
    format: "privada",
    location: "Buenos Aires · y residencias en gira",
  },
];

export const archivePhotos = [
  { src: "/photos/photo-1.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-2.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-3.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-4.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-5.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-6.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-7.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-8.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-9.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-10.jpg", alt: "Carmen Mesa, archivo" },
  { src: "/photos/photo-11.jpg", alt: "Carmen Mesa, archivo" },
];
