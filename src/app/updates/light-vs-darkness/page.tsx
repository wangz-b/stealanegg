import type { Metadata } from "next";
import { EntityLanding, type EntityGuide } from "@/components/wiki/EntityLanding";
import { siteConfig } from "@/data/site";

const route = "/updates/light-vs-darkness";

export const metadata: Metadata = {
  title: "Steal An Egg Light vs Darkness Event — Date & Status",
  description: "What the official Roblox event page confirms about Steal An Egg's Light vs Darkness event on September 12–13, 2026, plus a safe preparation checklist.",
  alternates: { canonical: `${siteConfig.domain}${route}` },
  openGraph: {
    title: "Steal An Egg Light vs Darkness Event",
    description: "Official event timing, confirmed details, and unverified reward boundaries.",
    url: `${siteConfig.domain}${route}`,
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Steal An Egg Light vs Darkness Event",
    description: "Official event timing, confirmed details, and unverified reward boundaries."
  }
};

const guide: EntityGuide = {
  eyebrow: "Official event watch",
  title: "Steal An Egg Light vs Darkness Event",
  route,
  parent: { label: "Updates", href: "/updates" },
  checked: "September 8, 2026",
  description: "The official Roblox event listing names Light vs Darkness and schedules it for September 12–13, 2026.",
  notice: "Verified from Roblox event 3414543093809152598 on September 8, 2026. The listing confirms the event name, host and displayed time window, but it does not publish reward names, egg odds, pet stats or a patch-note table.",
  answer: "Light vs Darkness is an official September 12–13 event",
  intro: [
    "Roblox lists the event as “Light vs Darkness” and describes two sides fighting for control as the skies change. The event page is hosted by Collect Rare Pets and links back to Steal An Egg.",
    "The displayed start time may follow your Roblox locale. Use the Notify Me control on the official event page and confirm the countdown in your own account before planning a session."
  ],
  entries: [
    { name: "Event name", meta: "Verified official wording", value: "Light vs Darkness", note: "The title appears on the official Roblox event listing." },
    { name: "Date window", meta: "Verified platform listing", value: "Sep 12–13", note: "Roblox displays a 24-hour event window; confirm the localized start time in your account." },
    { name: "Theme", meta: "Official teaser", value: "Two sides", note: "The description mentions a battle for control, changing skies and opposing forces." },
    { name: "Rewards and pets", meta: "Not published", value: "Unverified", note: "No official reward list, egg pool, mutation, odds or stat table was visible in the checked listing." }
  ],
  stepsTitle: "Prepare without relying on rumors",
  steps: [
    "Open the official Roblox event listing and use Notify Me.",
    "Check your localized countdown shortly before the displayed start.",
    "Keep enough cash and movement upgrades for any temporary progression route.",
    "Inspect the live Index and event UI before treating a pet or reward claim as confirmed.",
    "Return to the update hub after launch for sourced changes."
  ],
  cautions: [
    "The teaser does not confirm Light or Darkness reward stats.",
    "Do not treat creator thumbnails or community guesses as patch notes.",
    "A reported event pet is not verified until it appears in an official surface or the live game.",
    "Never use unofficial login pages, scripts or executors for event access."
  ],
  faqs: [
    { question: "When is the Steal An Egg Light vs Darkness event?", answer: "The official Roblox listing shows September 12 through September 13, 2026. Check the localized countdown in Roblox for your exact start time." },
    { question: "Are Light vs Darkness rewards confirmed?", answer: "Not from the checked event listing. It does not name rewards, pets, egg odds or stat values." },
    { question: "Is Light vs Darkness official?", answer: "Yes. A Roblox event page hosted by Collect Rare Pets links the event to Steal An Egg." },
    { question: "Will the event add codes?", answer: "No code is confirmed by the checked event listing. The codes page should be rechecked when the event begins." }
  ],
  links: [
    { href: "/updates", label: "Update hub", note: "Track later event and patch evidence." },
    { href: "/codes", label: "Code status", note: "Check for verified event code changes." },
    { href: "/guides/official-links", label: "Official links", note: "Open the verified Roblox experience safely." }
  ]
};

export default function Page() {
  return <EntityLanding guide={guide} />;
}
