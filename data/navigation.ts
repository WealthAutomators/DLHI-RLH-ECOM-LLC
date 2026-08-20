import { NavLink } from "@/types";

export const announcementText = "Thoughtful Finds For Modern Living";

export const categoryStripLinks: NavLink[] = [
  { label: "Home", href: "/categories/home-living" },
  { label: "Kitchen", href: "/categories/kitchen" },
  { label: "Bath", href: "/categories/bathroom" },
  { label: "Tech", href: "/categories/electronics" },
  { label: "Workspace", href: "/categories/workspace" },
  { label: "Outdoor", href: "/categories/outdoor" },
  { label: "Beauty", href: "/categories/beauty" },
];

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  {
    label: "Collections",
    href: "/categories",
    children: [
      { label: "Modern Home", href: "/categories/home-living" },
      { label: "Kitchen & Dining", href: "/categories/kitchen" },
      { label: "Workspace", href: "/categories/workspace" },
      { label: "Outdoor Living", href: "/categories/outdoor" },
      { label: "Beauty", href: "/categories/beauty" },
      { label: "Tech", href: "/categories/electronics" },
    ],
  },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Home & Living", href: "/categories/home-living" },
  { label: "Deals", href: "/shop?sale=true" },
];

export const footerLinks = {
  shop: [
    { label: "Shop All", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Deals", href: "/shop?sale=true" },
  ],
  collections: [
    { label: "Modern Home", href: "/categories/home-living" },
    { label: "Kitchen & Dining", href: "/categories/kitchen" },
    { label: "Workspace", href: "/categories/workspace" },
    { label: "Outdoor Living", href: "/categories/outdoor" },
    { label: "Beauty", href: "/categories/beauty" },
  ],
  support: [
    { label: "Track Order", href: "/track-order" },
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
