"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

export function HeroBanner() {
  return (
    <section className="bg-background pb-2 pt-4 md:pb-4 md:pt-6">
      <Container>
        <Carousel
          autoplay
          showDots
          showArrows
          className="overflow-hidden rounded-[1.5rem] border border-border shadow-[0_20px_50px_-28px_rgba(22,78,99,0.45)] md:rounded-[2rem]"
        >
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative aspect-[4/5] min-h-[460px] w-full sm:aspect-[16/9] sm:min-h-[480px] lg:aspect-[21/9] lg:min-h-[560px]"
            >
              <Image
                src={slide.image}
                alt={slide.headline.replace(/\n/g, " ")}
                fill
                className="object-cover"
                priority={slide.id === "1"}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/25 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10 lg:p-12">
                <motion.div
                  className="max-w-lg rounded-2xl border border-white/40 bg-white/85 p-5 shadow-lg backdrop-blur-md sm:p-6 md:p-7"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="whitespace-pre-line text-2xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                    {slide.headline}
                  </h1>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {slide.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    <Button asChild size="lg">
                      <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                    {slide.secondaryCtaText && slide.secondaryCtaLink && (
                      <Button asChild size="lg" variant="secondary">
                        <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
                      </Button>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
