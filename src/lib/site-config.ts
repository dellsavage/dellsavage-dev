export const siteConfig = {
  name: "Dell Savage",
  title: "Dell Savage — Software, Systems, and Experiments",
  description:
    "I'm a computer science and mathematics student building software, exploring infrastructure, and sharing what I learn along the way.",
  url: "https://dellsavage.dev",
  links: {
    github: "https://github.com/dellsavage",
  },
} as const;

export type SiteConfig = typeof siteConfig;
