import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Egg Run Risk Planner`,
  description: `Plan egg routes, base defense and carrying risk before targeting a rare biome egg.`,
  alternates: { canonical: `${siteConfig.domain}/squad-planner` }
};

export default function SquadPlannerPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Squad Planner", href: "/squad-planner" }]} />
      <SoftwareApplicationJsonLd />
      <Breadcrumbs items={[{ label: "Squad Planner", href: "/squad-planner" }]} />
      <PageIntro
        eyebrow="Run planning"
        title={`${siteConfig.gameName} Egg Run Risk Planner`}
        description="Compare egg value, return distance and base-defense risk before leaving your plot."
      />
      <AdsterraToolAd />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Target egg</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Choose a biome pool that can improve your current passive cash rather than chasing rarity alone.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Return risk</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Estimate the route length, nearby rivals and whether your base can protect the hatch timer.</p>
        </article>
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Check before using</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Check the live egg and your current income before committing to a dangerous return trip.</p>
        </article>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Related pages" title="Plan with better game context" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/tier-list" className="content-card">Tier List</Link>
          <Link href="/eggs" className="content-card">Egg Pools</Link>
          <Link href="/biomes" className="content-card">Biome Route</Link>
        </div>
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
