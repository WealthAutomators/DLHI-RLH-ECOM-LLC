"use client";

import Image from "next/image";
import Link from "next/link";
import { lifestyleBanner } from "@/data/homepage";
import { Button } from "@/components/ui/button";


export function LifestyleBanner() {
  const banner = lifestyleBanner;

  return (
    <section className="relative py-4 md:py-6">
      <div className="relative min-h-[360px] w-full overflow-hidden md:min-h-[460px]">
        <Image
          src={banner.image}
          alt={banner.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/75 via-dark/45 to-dark/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {banner.title}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/85">
                {banner.description}
              </p>
              <div className="mt-7">
                <Button asChild size="lg" variant="accent">
                  <Link href={banner.buttonLink}>{banner.buttonText}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
