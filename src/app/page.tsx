import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Users, Banknote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            Secure Your Future with <br />
            <span className="text-blue-600">Sree Bharani Chits</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Trusted by thousands for over a decade. Join our tailored chit schemes to save smart and borrow easy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-12 px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
          <div className="absolute top-0 -right-4 bg-indigo-400 w-72 h-72 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 bg-sky-400 w-72 h-72 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Secure</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Licensed and regulated. Your investments are safe with our transparent policies.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4 text-indigo-600 dark:text-indigo-400">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Join a network of trusted members. Mutual growth through cooperative finance.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="h-12 w-12 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mb-4 text-sky-600 dark:text-sky-400">
                <Banknote className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Dividends</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Enjoy high returns on your savings with our competitive dividend structure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
