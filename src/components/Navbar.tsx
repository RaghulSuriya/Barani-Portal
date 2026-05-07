"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Sree Bharani
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Home
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        About Us
                    </Link>
                    <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Services
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost">Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Register</Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="flex flex-col gap-4 mt-8">
                            <Link href="/" className="text-lg font-medium">Home</Link>
                            <Link href="/about" className="text-lg font-medium">About Us</Link>
                            <Link href="/services" className="text-lg font-medium">Services</Link>
                            <Link href="/contact" className="text-lg font-medium">Contact</Link>
                            <div className="h-px bg-border my-2" />
                            <Link href="/login">
                                <Button className="w-full" variant="outline">Login</Button>
                            </Link>
                            <Link href="/register">
                                <Button className="w-full">Register</Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
