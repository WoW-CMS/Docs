import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

export const sidebarEs: HopeThemeSidebarConfig = {
  "/es/": [
    "",
    {
      text: "BlizzCMS",
      icon: "",
      prefix: "blizzcms/",
      children: [
        "getting-started",
        "guides/",
        "structure/",
        "developer/",
        "changelogs/",
      ],
    },
  ],

  "/es/blizzcms/": [
    "",
    "getting-started",
    {
      text: "Guías",
      icon: "bx bxs-book-reader",
      prefix: "guides/",
      collapsible: true,
      children: [
        {
          text: "Linux",
          icon: "bx bxl-tux",
          prefix: "linux/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Windows",
          icon: "bx bxl-windows",
          prefix: "windows/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Estructura",
      icon: "bx bxs-layer",
      prefix: "structure/",
      collapsible: true,
      children: [
        "constants",
        "database",
        {
          text: "Funciones",
          icon: "bx bx-code",
          prefix: "functions/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Librerías",
          icon: "bx bx-library",
          prefix: "libraries/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Modelos",
          icon: "bx bx-transfer",
          prefix: "models/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "Desarrollador",
      icon: "bx bxs-layer-plus",
      prefix: "developer/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "Changelogs",
      icon: "bx bxs-box",
      prefix: "changelogs/",
      collapsible: true,
      children: "structure",
    },
  ],
}
