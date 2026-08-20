import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Modern Living,\nMade Effortless.",
    description:
      "Discover thoughtfully selected products for a more comfortable, beautiful everyday life.",
    ctaText: "Shop Collection",
    ctaLink: "/shop",
    secondaryCtaText: "Explore New Arrivals",
    secondaryCtaLink: "/new-arrivals",
  },
  {
    id: "2",
    image: "/hero/hero-2.jpg",
    headline: "Refresh Your Everyday.",
    description:
      "Bright kitchens, calm corners, and essentials that make home feel effortlessly put together.",
    ctaText: "Shop Home",
    ctaLink: "/categories/home-living",
  },
  {
    id: "3",
    image: "/hero/hero-3.jpg",
    headline: "Designed For The Way You Live.",
    description:
      "From outdoor mornings to focused workdays — find pieces that fit your rhythm.",
    ctaText: "Explore More",
    ctaLink: "/categories",
  },
];

export const featuredCollections = [
  {
    id: "1",
    label: "Collection",
    title: "Modern Home",
    slug: "home-living",
    image: "/banners/collection-home.jpg",
  },
  {
    id: "2",
    label: "Collection",
    title: "Kitchen & Dining",
    slug: "kitchen",
    image: "/banners/collection-kitchen.jpg",
  },
  {
    id: "3",
    label: "Collection",
    title: "Workspace",
    slug: "workspace",
    image: "/banners/collection-workspace.jpg",
  },
  {
    id: "4",
    label: "Collection",
    title: "Outdoor Living",
    slug: "outdoor",
    image: "/banners/collection-outdoor.jpg",
  },
];

export const shopByCategory = [
  {
    id: "1",
    name: "Home",
    slug: "home-living",
    image: "/categories/home-living.jpg",
    size: "large" as const,
  },
  {
    id: "2",
    name: "Kitchen",
    slug: "kitchen",
    image: "/categories/kitchen.jpg",
    size: "medium" as const,
  },
  {
    id: "3",
    name: "Tech",
    slug: "electronics",
    image: "/categories/electronics.jpg",
    size: "medium" as const,
  },
  {
    id: "4",
    name: "Workspace",
    slug: "workspace",
    image: "/categories/workspace.jpg",
    size: "small" as const,
  },
  {
    id: "5",
    name: "Bath",
    slug: "bathroom",
    image: "/categories/bathroom.jpg",
    size: "small" as const,
  },
  {
    id: "6",
    name: "Outdoor",
    slug: "outdoor",
    image: "/categories/outdoor.jpg",
    size: "small" as const,
  },
];

export const lifestyleBanner: PromoBanner = {
  id: "1",
  title: "Modern Living Starts Here.",
  description: "Thoughtfully selected essentials for comfortable, beautiful spaces.",
  buttonText: "Explore The Collection",
  buttonLink: "/shop",
  image: "/banners/lifestyle-banner.jpg",
};

export const productSpotlightSlug = "travertine-accent-side-table";

export const homepageNewArrivalSlugs = [
  "travertine-accent-side-table",
  "washed-linen-throw-blanket",
  "gooseneck-electric-kettle",
  "walnut-laptop-stand",
  "rechargeable-patio-lantern",
  "lighted-vanity-mirror",
  "portable-usb-c-display",
  "magnetic-tile-builder-set",
] as const;

export const homepageBestsellerSlugs = [
  "arched-floor-mirror",
  "gooseneck-electric-kettle",
  "walnut-laptop-stand",
  "rechargeable-patio-lantern",
  "brass-task-desk-lamp",
  "linen-drum-floor-lamp",
  "sensor-soap-dispenser",
  "kitchen-scale",
] as const;

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Thoughtful Delivery",
    description: "Free shipping on orders over $75. Delivered in 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Your payment information is protected with industry-standard encryption.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Easy Returns",
    description: "Hassle-free 30-day returns on most items. We make it simple.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Friendly Support",
    description: "Our team is available Mon–Fri to help with orders and questions.",
  },
];

export const newsletter = {
  title: "Bring More Good Into Everyday.",
  description: "Discover new arrivals, curated collections and exclusive offers.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "travertine-accent-side-table",
  "gooseneck-electric-kettle",
  "arched-floor-mirror",
  "portable-usb-c-display",
  "lighted-vanity-mirror",
  "linen-drum-floor-lamp",
] as const;

export const homepageFeaturedSlugs = [
  "travertine-accent-side-table",
  "washed-linen-throw-blanket",
  "walnut-laptop-stand",
  "rechargeable-patio-lantern",
  "gooseneck-electric-kettle",
  "seagrass-nesting-baskets",
  "brass-task-desk-lamp",
  "usb-c-charging-hub",
] as const;

export const promotionalBanner: PromoBanner = lifestyleBanner;

export const aboutSection = {
  title: "Modern Living, Beautifully Simple.",
  description:
    "DLHI RLH ECOM LLC curates thoughtful products for home, work, and everyday Florida living — selected for comfort, design, and simplicity.",
  checklist: [
    "Coastal-modern product curation",
    "Quality checked for everyday use",
    "Fast, reliable shipping nationwide",
    "Friendly customer support team",
  ],
  buttonText: "Learn More About Us",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured Products",
  description:
    "Hand-picked favorites across home, kitchen, workspace, and outdoor living.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home-living",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home-living" },
  { label: "Kitchen", slug: "kitchen" },
  { label: "Workspace", slug: "workspace" },
  { label: "Outdoor", slug: "outdoor" },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export const instagramPosts = [
  { id: "1", image: "/instagram/post-1.jpg", alt: "Bright living room styling" },
  { id: "2", image: "/instagram/post-2.jpg", alt: "Modern kitchen details" },
  { id: "3", image: "/instagram/post-3.jpg", alt: "Calm workspace setup" },
  { id: "4", image: "/instagram/post-4.jpg", alt: "Outdoor patio living" },
  { id: "5", image: "/instagram/post-5.jpg", alt: "Bathroom essentials" },
  { id: "6", image: "/instagram/post-6.jpg", alt: "Home decor accents" },
];
