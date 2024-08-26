import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "instant-table docs",
    short_name: "instant-table",
    description: "instant-table docs",
    start_url: "/",
    display: "standalone",
    background_color: "#e3cbc3",
    theme_color: "#e3cbc3",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
