import type { Metadata } from "next";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Pet Income Calculator`,
  description: `Compare ${siteConfig.gameName} pet income with editable base, size, and mutation multipliers plus a clear calculation breakdown.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Pet income tool"
        title={`${siteConfig.gameName} Pet Income Calculator`}
        description="Enter the cash shown on a pet, add the size and mutation modifiers you see in game, then compare two setups without guessing hidden odds."
      />
      <AdsterraToolAd />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <section className="content-card mt-10">
        <h2>How the calculator works</h2>
        <p className="mt-4 text-white/70">Projected income equals base cash per second × size multiplier × mutation multiplier. Every input stays editable because community reports can change after an update.</p>
        <p className="mt-4 text-white/70">Read the <a href="/mutations">mutation guide</a>, compare targets on the <a href="/tier-list">pet tier list</a>, or browse the <a href="/pets">pet index</a>.</p>
      </section>
      <AdsterraToolBottom />
    </main>
  );
}
