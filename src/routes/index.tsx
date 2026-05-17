import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Store,
  Truck,
  Wallet,
  Zap,
  ShieldCheck,
  PackageSearch,
  LineChart,
  CheckCircle2,
} from "lucide-react";

import electronics from "@/assets/product-electronics.jpg";
import beauty from "@/assets/product-beauty.jpg";
import home from "@/assets/product-home.jpg";
import fitness from "@/assets/product-fitness.jpg";
import fashion from "@/assets/product-fashion.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drop Direct — South Africa's reseller supplier network" },
      {
        name: "description",
        content:
          "Drop Direct connects South African resellers to verified suppliers. Source winning products, sync inventory, and fulfill orders — no stock required.",
      },
      { property: "og:title", content: "Drop Direct — Reseller supplier network" },
      {
        property: "og:description",
        content:
          "Source verified suppliers, sync products to your store, and fulfill without holding inventory.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <Header />
      <Hero />
      <LogoStrip />
      <HowItWorks />
      <Products />
      <ForResellers />
      <ForSuppliers />
      <LunexBridge />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
        <span className="text-base font-bold tracking-tighter">
          D<span className="text-brand-yellow">D</span>
        </span>
      </div>
      <span className="text-base font-semibold tracking-tight">Drop Direct</span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#resellers" className="hover:text-foreground">For resellers</a>
          <a href="#suppliers" className="hover:text-foreground">For suppliers</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/auth"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/auth"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Built for South African resellers
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Sell products you
            <br />
            <span className="text-brand-yellow">don't have to stock.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-foreground/65">
            Drop Direct connects resellers to verified South African suppliers. Import
            winning products to your store, take orders, and let suppliers fulfill —
            you keep the margin.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/auth"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              Start sourcing free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/auth"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-surface-elevated px-6 text-sm font-semibold text-foreground ring-1 ring-white/10 transition-colors hover:bg-surface-input"
            >
              I'm a supplier
            </Link>
          </div>
          <p className="mt-4 text-xs text-foreground/40">
            Free to browse · No card required · Pay per order
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const items = [
    { img: electronics, label: "Wireless Pro", margin: "62%" },
    { img: beauty, label: "Glow Serum", margin: "71%" },
    { img: home, label: "Aura Diffuser", margin: "58%" },
    { img: fashion, label: "Velour Watch", margin: "66%" },
  ];
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.label}
            className="group relative overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-white/10"
            style={{ transform: `translateY(${i % 2 ? 16 : 0}px)` }}
          >
            <img
              src={it.img}
              alt={it.label}
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/90 to-transparent p-3">
              <span className="text-xs font-semibold">{it.label}</span>
              <span className="rounded-md bg-brand-yellow/20 px-2 py-0.5 text-[10px] font-bold text-brand-yellow">
                {it.margin}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoStrip() {
  const stats = [
    { k: "1,200+", v: "Verified suppliers" },
    { k: "45K", v: "SKUs available" },
    { k: "R18M+", v: "Reseller GMV" },
    { k: "48hr", v: "Avg. fulfillment" },
  ];
  return (
    <section className="border-b border-white/5 bg-surface-elevated/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.v} className="bg-background px-6 py-8 text-center">
            <p className="text-3xl font-bold text-brand-yellow">{s.k}</p>
            <p className="mt-1 text-sm text-foreground/60">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: PackageSearch,
      title: "Browse the catalog",
      desc: "Search 45,000+ products from verified SA suppliers. Filter by margin, category, and shipping time.",
    },
    {
      icon: Store,
      title: "Push to your store",
      desc: "One-click import to your LunexWeb store, Shopify, or any platform via our sync layer.",
    },
    {
      icon: Truck,
      title: "Supplier ships it",
      desc: "When a customer orders, the supplier fulfills directly. You never touch inventory.",
    },
    {
      icon: Wallet,
      title: "Keep your margin",
      desc: "Drop Direct routes payouts automatically. Suppliers get paid, you keep the rest.",
    },
  ];
  return (
    <section id="how" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            From product to payout in four steps.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-background p-8">
              <span className="absolute right-6 top-6 text-xs font-mono text-foreground/30">
                0{i + 1}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow/10 text-brand-yellow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const cards = [
    { img: electronics, cat: "Electronics", title: "Wireless Pro Earbuds", margin: "62%", orders: "12.4K/wk" },
    { img: beauty, cat: "Beauty", title: "Glow Vitamin C Serum", margin: "71%", orders: "8.9K/wk" },
    { img: fitness, cat: "Fitness", title: "Power Flex Home Kit", margin: "54%", orders: "4.7K/wk" },
    { img: home, cat: "Home", title: "Aura Aroma Diffuser", margin: "58%", orders: "6.2K/wk" },
    { img: fashion, cat: "Fashion", title: "Velour Classic Watch", margin: "66%", orders: "9.1K/wk" },
  ];
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
              Trending now
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Winning products this week.
            </h2>
          </div>
          <Link
            to="/auth"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow hover:underline"
          >
            See full catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-white/5 transition-colors hover:ring-white/15"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                  {c.cat}
                </p>
                <h3 className="mt-1 line-clamp-1 text-sm font-semibold">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="rounded-md bg-brand-yellow/15 px-2 py-1 font-bold text-brand-yellow">
                    {c.margin}
                  </span>
                  <span className="text-foreground/50">{c.orders}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForResellers() {
  const features = [
    { icon: Zap, title: "One-click product import", desc: "Push any product to your store with images, copy, and pricing pre-built." },
    { icon: LineChart, title: "Real margin data", desc: "See COGS, recommended retail, and weekly order volume before you import." },
    { icon: Truck, title: "Order routing", desc: "Orders auto-route to suppliers. Tracking syncs back to your store." },
  ];
  return (
    <section id="resellers" className="border-b border-white/5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            For resellers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Run a store without
            <br />
            owning a warehouse.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-foreground/65">
            Skip the inventory, packing, and shipping. Focus on marketing and
            customer service while suppliers handle fulfillment.
          </p>
          <ul className="mt-8 space-y-5">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/auth"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Start as a reseller
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img src={beauty} alt="Reseller storefront" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl bg-surface-elevated p-4 ring-1 ring-white/10 backdrop-blur-md sm:block">
            <p className="text-xs text-foreground/60">This month</p>
            <p className="mt-1 text-2xl font-bold">R 142,300</p>
            <p className="mt-1 text-xs text-brand-yellow">+38% vs last month</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ForSuppliers() {
  const features = [
    { icon: Boxes, title: "List once, sell everywhere", desc: "Your products get distributed across every reseller store on the network." },
    { icon: ShieldCheck, title: "Verified buyer protection", desc: "Drop Direct holds funds until orders ship — you get paid, on time, every time." },
    { icon: LineChart, title: "Demand insights", desc: "See which SKUs are trending and which resellers are driving your sales." },
  ];
  return (
    <section id="suppliers" className="border-b border-white/5 bg-surface-elevated/20 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img src={home} alt="Supplier warehouse" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            For suppliers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Distribute your catalog through hundreds of stores.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-foreground/65">
            Upload your products once. Drop Direct connects them to a network of
            South African resellers who market and sell on your behalf.
          </p>
          <ul className="mt-8 space-y-5">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            to="/auth"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-surface-elevated px-6 text-sm font-semibold text-foreground ring-1 ring-white/10 transition-colors hover:bg-surface-input"
          >
            Apply as a supplier
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LunexBridge() {
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface-elevated to-background p-10 sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
            <div className="text-center lg:text-right">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Storefront layer
              </p>
              <h3 className="mt-2 text-2xl font-bold">LunexWeb</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Done-for-you online stores with payments, domain, and design.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-brand-yellow to-transparent lg:block" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-background">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="hidden h-px w-16 bg-gradient-to-r from-brand-yellow via-brand-yellow to-transparent lg:block" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Supplier layer
              </p>
              <h3 className="mt-2 text-2xl font-bold">Drop Direct</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Verified suppliers fulfill orders from your store automatically.
              </p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-foreground/55">
            Drop Direct's API is exclusively integrated with{" "}
            <span className="font-semibold text-foreground">LunexWeb stores</span>,
            giving resellers a complete plug-and-play commerce stack.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      desc: "Browse the catalog and test the platform.",
      features: ["Unlimited browsing", "Up to 10 active products", "5% transaction fee", "Email support"],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Growth",
      price: "R 299",
      per: "/month",
      desc: "For active resellers scaling their store.",
      features: ["Unlimited products", "3% transaction fee", "Priority order routing", "Margin analytics", "Chat support"],
      cta: "Start Growth",
      highlight: true,
    },
    {
      name: "Supplier",
      price: "Custom",
      desc: "List your catalog across the reseller network.",
      features: ["Unlimited SKUs", "Reseller demand insights", "API + bulk upload", "Dedicated account manager"],
      cta: "Talk to us",
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple plans that scale with you.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-8 ring-1 ${
                p.highlight
                  ? "bg-surface-elevated ring-brand-yellow/40"
                  : "bg-surface-elevated/40 ring-white/10"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-background">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-foreground/60">{p.desc}</p>
              <p className="mt-6 text-4xl font-bold">
                {p.price}
                {p.per && <span className="text-base font-medium text-foreground/50">{p.per}</span>}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/auth"
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-opacity ${
                  p.highlight
                    ? "bg-brand-yellow text-background hover:opacity-90"
                    : "bg-foreground text-background hover:opacity-90"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do I need to hold inventory?", a: "No. Suppliers store and ship products. You only handle marketing and customer experience." },
    { q: "How do I get paid?", a: "Customers pay you on your store. Drop Direct settles the supplier's portion automatically and you keep the margin." },
    { q: "Is this only for South Africa?", a: "Yes — suppliers and resellers are South Africa-based for fast local fulfillment (avg. 48 hours)." },
    { q: "Can I use my existing store?", a: "Drop Direct's API integrates exclusively with LunexWeb stores. We'll set yours up if you don't have one." },
  ];
  return (
    <section className="border-b border-white/5 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Common questions
        </h2>
        <div className="mt-12 divide-y divide-white/10 rounded-2xl bg-surface-elevated/40 ring-1 ring-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold">
                {f.q}
                <span className="ml-4 text-brand-yellow transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Your store. Their inventory.
          <br />
          <span className="text-brand-yellow">Your margin.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/65">
          Join thousands of South African resellers building real businesses on Drop Direct.
        </p>
        <Link
          to="/auth"
          className="mt-9 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Get started — it's free
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Logo />
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Drop Direct. Powered by LunexWeb.
        </p>
        <div className="flex gap-6 text-xs text-foreground/50">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
