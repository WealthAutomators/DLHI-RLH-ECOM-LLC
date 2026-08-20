"use client";

import { homepageBestsellerSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function BestSellers() {
  const products = getProductsBySlugs(homepageBestsellerSlugs);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionHeading title="Best Sellers" viewMoreLink="/best-sellers" />
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
