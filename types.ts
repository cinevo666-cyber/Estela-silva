export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}

export interface ButtonLink {
  title: string;
  url: string;
  iconClass?: string; // Optional icon for the button itself
}

export interface ProfileData {
  name: string;
  title: string;
  imageUrl: string;
}