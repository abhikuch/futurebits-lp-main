import { ASSETS, COMPANY } from "@/config/site";

export default function manifest() {
  return {
    name: COMPANY.name,
    short_name: COMPANY.name,
    description: COMPANY.tagline,
    start_url: "/ai",
    display: "standalone",
    background_color: "#060618",
    theme_color: "#060618",
    icons: [
      {
        src: ASSETS.favicon,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
