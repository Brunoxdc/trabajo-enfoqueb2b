export interface BlogPost {
  slug: string;
  href: string;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
}

/** Fuente única de los 3 artículos del blog: usada en el índice, en cada artículo (sidebar) y en la home. */
export const blogPosts: BlogPost[] = [
  {
    slug: "landing-pages-que-convierten",
    href: "/blog-landing-pages-que-convierten",
    category: "Landing Pages",
    title: "Landing pages que convierten",
    description:
      "Las claves para diseñar landing pages que atraen, persuaden y convierten más. Estructura, mensajes y elementos que marcan la diferencia.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    date: "20 mayo, 2024",
    readTime: "5 min de lectura",
  },
  {
    slug: "campana-sin-desperdiciar-presupuesto",
    href: "/blog-campana-sin-desperdiciar-presupuesto",
    category: "Campañas",
    title: "Campañas sin desperdiciar presupuesto",
    description:
      "Cómo orientar campañas para atraer mejores oportunidades y optimizar la inversión digital. Segmentación, creatividades y medición.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "16 mayo, 2024",
    readTime: "6 min de lectura",
  },
  {
    slug: "redes-sociales-con-estrategia",
    href: "/blog-redes-sociales-con-estrategia",
    category: "Estrategia Digital",
    title: "Redes sociales con estrategia",
    description:
      "Cómo usar redes sociales B2B para reforzar su mensaje, generar confianza y apoyar objetivos comerciales.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    date: "12 mayo, 2024",
    readTime: "4 min de lectura",
  },
];
