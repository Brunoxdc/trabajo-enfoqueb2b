/**
 * Datos del negocio usados en todo el sitio: teléfono, WhatsApp, correo,
 * redes sociales y la clave de Web3Forms.
 *
 * Único lugar donde tocar estos valores — cambiarlos aquí los actualiza en
 * el header, footer, botón flotante de WhatsApp y todos los formularios a la vez.
 */
export const site = {
  name: "Enfoque B2B",
  domain: "enfoqueb2b.com",
  phone: {
    display: "+51 938 575 074",
    /** Formato internacional sin "+", requerido por los links de wa.me */
    e164: "51938575074",
  },
  email: "contacto@enfoqueb2b.com",
  social: {
    linkedin: "https://www.linkedin.com/company/enfoque-b2b",
    instagram: "https://www.instagram.com/enfoqueb2b",
    facebook: "https://www.facebook.com/enfoqueb2b",
  },
  /** Clave pública de Web3Forms (no es secreta, está pensada para uso client-side). */
  web3formsAccessKey: "d2556c88-dd09-42cd-a439-1ba22d1f7b7d",
} as const;

/** Arma un link de WhatsApp; si se pasa `message`, lo abre con el texto ya cargado. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.phone.e164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
