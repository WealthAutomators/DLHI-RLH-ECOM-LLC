"use client";

import Image from "next/image";
import Link from "next/link";
import { productSpotlightSlug } from "@/data/homepage";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";

export function ProductSpotlight() {
  const product = getProductBySlug(productSpotlightSlug);
  const { addToCart } = useCart();

  if (!product) return null;

  const specs = Object.entries(product.specifications).slice(0, 4);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent/20" />
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-24 w-24 rotate-12 rounded-2xl border border-accent/40" />

          <div className="relative grid lg:grid-cols-2">
            <div className="relative aspect-square bg-white/10 lg:aspect-auto lg:min-h-[520px]">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-10 text-white md:px-12 lg:px-14">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Product Spotlight
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h2>
              <div className="mt-3 [&_span]:text-white/80">
                <StarRating rating={product.rating} reviews={product.reviews} size="sm" />
              </div>
              <p className="mt-5 text-base leading-relaxed text-white/80">{product.description}</p>

              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {specs.map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-sm">
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                      {key}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <p className="text-2xl font-bold tracking-tight">
                  {formatPrice(product.salePrice ?? product.price)}
                  {product.salePrice && (
                    <span className="ml-2 text-base font-medium text-white/55 line-through">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  variant="accent"
                  className="text-foreground hover:bg-accent/90"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="border-white/40 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  <Link href={`/product/${product.slug}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
