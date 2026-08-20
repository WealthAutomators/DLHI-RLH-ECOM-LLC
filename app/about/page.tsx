import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check, Award, Heart, ShoppingBag } from "lucide-react";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-sm">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="Our Story">
            <p>
              DLHI RLH ECOM LLC was founded around a simple idea: modern living should feel
              beautifully simple. From Delray Beach, Florida, we curate a coastal-modern marketplace
              of thoughtfully selected products for home, work, and everyday life.
            </p>
            <p className="mt-4">
              Our catalog spans home, kitchen, bath, tech, workspace, outdoor, beauty, and more —
              chosen for comfort, design, and everyday usefulness. We believe great products should
              feel calm, contemporary, and approachable from first browse to final delivery.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShoppingBag, title: "Curated Marketplace", desc: "18 categories spanning home, lifestyle, tech, and family essentials." },
            { icon: Award, title: "Thoughtful Quality", desc: "Every product is selected for design, comfort, and lasting usefulness." },
            { icon: Heart, title: "Customer First", desc: "30-day returns, responsive support, and a satisfaction-first approach." },
            { icon: Check, title: "Easy Shopping", desc: "One marketplace, one checkout — no jumping between multiple stores." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What Our Customers Say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop Our Collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
