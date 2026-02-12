import { ProfileData, SocialLink, ButtonLink } from './types';

export const PROFILE_DATA: ProfileData = {
  name: 'Seu Nome Aqui',
  title: 'Criador de Conteúdo | Marketing Digital',
  // Using a high quality placeholder from Picsum
  imageUrl: 'https://picsum.photos/id/64/400/400', 
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com',
    iconClass: 'fab fa-instagram',
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com',
    iconClass: 'fab fa-youtube',
  },
  {
    platform: 'WhatsApp',
    url: 'https://whatsapp.com',
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
    title: 'Hospedagem',
    url: 'https://google.com',
    iconClass: 'fas fa-server',
  },
  {
    title: 'WhatsApp',
    url: 'https://wa.me/',
    iconClass: 'fab fa-whatsapp',
  },
  {
    title: 'E-book Grátis',
    url: 'https://google.com',
    iconClass: 'fas fa-book-open',
  },
];