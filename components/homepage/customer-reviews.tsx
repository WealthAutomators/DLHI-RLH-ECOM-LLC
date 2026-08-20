"use client";

import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { StarRating } from "@/components/ui/star-rating";

export function CustomerReviews() {
  return (
    <section className="bg-soft-section py-12 md:py-16">
      <Container>
        <SectionHeading
          title="Customer Reviews"
          subtitle="Fresh stories from shoppers who made modern living feel simpler."
        />
        <Carousel slidesToShow={3} className="mt-2 px-8" showDots>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <StarRating rating={t.rating} showCount={false} size="sm" />
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Verified Purchase
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
