"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-blue-600"
        >
          TestForge
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="transition hover:text-blue-600"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="transition hover:text-blue-600"
          >
            How It Works
          </Link>

          <Link
            href="#statistics"
            className="transition hover:text-blue-600"
          >
            Statistics
          </Link>

          <Link
            href="#events"
            className="transition hover:text-blue-600"
          >
            Events
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline">
            Login
          </Button>

          <Button>
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}