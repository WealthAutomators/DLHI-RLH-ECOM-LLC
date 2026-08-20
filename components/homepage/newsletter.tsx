"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] px-6 py-12 text-center md:px-16 md:py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1A6B7F] to-[#E8F4F2]" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {newsletter.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-white/85">{newsletter.description}</p>
            {submitted ? (
              <p className="mt-8 text-sm font-medium text-accent">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  placeholder={newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 flex-1 rounded-xl border-white/20 bg-white/15 text-white placeholder:text-white/55 backdrop-blur-sm"
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="accent"
                  className="shrink-0 text-foreground hover:bg-accent/90"
                >
                  {newsletter.buttonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
