"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { shopByCategory } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-full",
  medium: "md:col-span-2 min-h-[200px]",
  small: "min-h-[180px]",
};

export function ShopByCategory() {
  return (
    <section className="bg-soft-section py-12 md:py-16">
      <Container>
        <SectionHeading
          title="Shop By Category"
          subtitle="An asymmetric browse across the spaces that matter most."
        />
        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-4 md:grid-rows-2 md:min-h-[520px]">
          {shopByCategory.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(sizeClasses[category.size])}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="text-lg font-bold text-white md:text-xl">{category.name}</h3>
                  <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Shop Now
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
