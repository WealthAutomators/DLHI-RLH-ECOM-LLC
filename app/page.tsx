import { HeroBanner } from "@/components/homepage/hero-banner";
import { FeaturedCollections } from "@/components/homepage/featured-collections";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { LifestyleBanner } from "@/components/homepage/lifestyle-banner";
import { ShopByCategory } from "@/components/homepage/shop-by-category";
import { BestSellers } from "@/components/homepage/best-sellers";
import { ProductSpotlight } from "@/components/homepage/product-spotlight";
import { CustomerReviews } from "@/components/homepage/customer-reviews";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCollections />
      <NewArrivals />
      <LifestyleBanner />
      <ShopByCategory />
      <BestSellers />
      <ProductSpotlight />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
