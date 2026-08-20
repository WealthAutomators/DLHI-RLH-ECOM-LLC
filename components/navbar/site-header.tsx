"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import {
  announcementText,
  categoryStripLinks,
  navigationLinks,
} from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { SearchBar } from "@/components/navbar/search-bar";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-accent text-foreground">
        <Container className="flex h-8 items-center justify-center">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase">
            {announcementText}
          </p>
        </Container>
      </div>

      <div className="border-b border-border bg-card">
        <Container>
          <div className="flex items-center gap-4 py-3 lg:gap-10 lg:py-4">
            <Link href="/" className="flex shrink-0 items-center">
              <Image
                src="/logo/logo.svg"
                alt={company.name}
                width={220}
                height={48}
                priority
                className="h-10 w-auto sm:h-11"
              />
            </Link>

            <nav className="hidden flex-1 justify-center lg:flex">
              <ul className="flex items-center gap-0.5">
                {navigationLinks.map((link) => (
                  <li
                    key={link.href + link.label}
                    className="relative"
                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.children && activeDropdown === link.label && (
                      <div className="absolute left-0 top-full z-50 mt-1 min-w-[210px] rounded-xl border border-border bg-card py-1.5 shadow-lg">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-1 lg:ml-0 lg:pl-6 lg:border-l lg:border-border">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
                <Link href="/wishlist" aria-label="Wishlist">
                  <Heart className="h-[18px] w-[18px]" />
                  {wishlist.length > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="h-10 w-10">
                <Link href="/profile" aria-label="Account">
                  <User className="h-[18px] w-[18px]" />
                </Link>
              </Button>

              <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
                <Link href="/cart" aria-label="Cart">
                  <ShoppingBag className="h-[18px] w-[18px]" />
                  {itemCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 lg:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
              </Button>
            </div>
          </div>

          {searchOpen && (
            <div className="pb-3">
              <SearchBar variant="inline" />
            </div>
          )}
        </Container>

        <nav className="hidden border-t border-border bg-soft-section lg:block">
          <Container>
            <ul className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
              {categoryStripLinks.map((link) => (
                <li key={link.href} className="shrink-0">
                  <Link
                    href={link.href}
                    className="inline-flex rounded-md px-3.5 py-1.5 text-sm font-semibold text-foreground/80 transition-colors hover:bg-card hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-card lg:hidden">
          <Container className="py-3">
            <ul className="space-y-0.5">
              {navigationLinks.map((link) => (
                <li key={`m-${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-muted"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-3 space-y-0.5 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="my-2 border-t border-border" />
              {categoryStripLinks.map((link) => (
                <li key={`c-${link.href}`}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </div>
  );
}
