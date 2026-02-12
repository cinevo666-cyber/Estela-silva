import { ProfileData, SocialLink, ButtonLink } from './types';

export const PROFILE_DATA: ProfileData = {
  name: 'António Silva',
  title: 'Criador de Conteúdo | Marketing Digital',
  // Using a high quality placeholder from Picsum
  imageUrl: 'https://picsum.photos/id/64/400/400', 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/antannio007?igsh=a3liOGcxemQ5N3Rp',
    iconClass: 'fab fa-instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    iconClass: 'fab fa-youtube',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.link/0fahvm',
    iconClass: 'fab fa-whatsapp',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com',
    iconClass: 'fab fa-linkedin-in',
  },
];

export const BUTTON_LINKS: ButtonLink[] = [
  {
    title: 'Meu Curso',
    url: 'https://google.com',
    iconClass: 'fas fa-graduation-cap',
  },
  {
    title: 'Localização',
    url: 'https://maps.app.goo.gl/3uyR98YE5Ynq6hQ89',
    iconClass: 'fas fa-map-marker-alt',
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.link/0fahvm',
    iconClass: 'fab fa-whatsapp',
  },
  {
    title: 'E-book Grátis',
    url: 'https://google.com',
    iconClass: 'fas fa-book-open',
  },
];