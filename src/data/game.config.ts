import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Steal An Egg",
  slug: "stealanegg",
  domain: "https://stealanegga.lol",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Cash",
    abbr: "$"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/114667206840982/Steal-An-Egg"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};
