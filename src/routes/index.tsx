import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  Store,
  Truck,
  ShieldCheck,
  LineChart,
  Upload,
  Users,
  PackageCheck,
  Play,
} from "lucide-react";

import storefrontLaptop from "@/assets/supplier-storefront-laptop.jpg";
import mobileShop from "@/assets/supplier-mobile-shop.jpg";
import warehouse from "@/assets/supplier-warehouse.jpg";
import unboxing from "@/assets/supplier-customer-unboxing.jpg";
import resellerDesk from "@/assets/supplier-reseller-desk.jpg";
import shippingImage from "@/assets/shipping-logistics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drop Direct — Distribute your products through SA's reseller network" },
      {
        name: "description",
        content:
          "Drop Direct connects South African suppliers to a network of resellers running LunexWeb stores. List once, sell everywhere — we handle the orders.",
      },
      { property: "og:title", content: "Drop Direct — Supplier distribution network" },
      {
        property: "og:description",
        content:
          "Put your catalog in front of hundreds of online stores. List once, sell everywhere.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="light-theme min-h-screen bg-background text-foreground font-display">
      <Header />
      <Hero />
      <LogoStrip />
      <Showcase />
      <HowItWorks />
      <VideoExplainer />
      <ForSuppliers />
      <ShippingSection />
      <LunexBridge />
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#network" className="hover:text-foreground">Where you'll sell</a>
          <a href="#suppliers" className="hover:text-foreground">For suppliers</a>
          <a href="#partner" className="hover:text-foreground">LunexWeb partner</a>
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
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-yellow px-4 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Apply as supplier
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-black/5">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            For South African suppliers · Partnered with LunexWeb
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Your products,
            <br />
            <span className="text-brand-yellow">sold in hundreds of stores.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-foreground/65">
            Drop Direct is the distribution layer that puts your catalog in front of
            resellers running LunexWeb online stores. You handle stock and shipping —
            they handle marketing and customers.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/auth"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Apply as a supplier
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-surface-elevated px-6 text-sm font-semibold text-foreground ring-1 ring-black/10 transition-colors hover:bg-surface-input"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-xs text-foreground/40">
            Free to list · You set the wholesale price · Get paid on every order
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-surface-elevated ring-1 ring-black/10">
          <img
            src={storefrontLaptop}
            alt="A reseller's online store displaying curated products"
            className="h-72 w-full object-cover sm:h-80"
            loading="eager"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              Reseller storefront
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Your products listed here</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-surface-elevated ring-1 ring-black/10 sm:translate-y-6">
          <img
            src={mobileShop}
            alt="Customer shopping on a mobile store"
            className="h-72 w-full object-cover sm:h-80"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-yellow">
              Mobile checkout
            </p>
            <p className="mt-1 text-sm font-semibold text-white">Customers buy from any device</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoStrip() {
  const stats = [
    { k: "300+", v: "Active reseller stores" },
    { k: "R18M+", v: "GMV processed" },
    { k: "48hr", v: "Avg. order turnaround" },
    { k: "0%", v: "Listing fees" },
  ];
  return (
    <section className="border-b border-black/5 bg-surface-elevated/30">
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

function Showcase() {
  const cards = [
    {
      img: storefrontLaptop,
      title: "Boutique lifestyle stores",
      sub: "Curated catalogs run by independent SA resellers",
    },
    {
      img: mobileShop,
      title: "Mobile-first shops",
      sub: "Most orders come from phones — checkout is one tap",
    },
    {
      img: resellerDesk,
      title: "Power resellers",
      sub: "Operators pushing volume across multiple categories",
    },
    {
      img: unboxing,
      title: "Real customers, real homes",
      sub: "Your packaging arriving at doors across the country",
    },
  ];
  return (
    <section id="network" className="border-b border-black/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            Where your products will be sold
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Every kind of store on the network.
          </h2>
          <p className="mt-5 text-lg text-foreground/65">
            Once you list with Drop Direct, your SKUs become available to every reseller
            on the platform — from boutique lifestyle shops to high-volume operators.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl bg-surface-elevated ring-1 ring-black/5 transition-colors hover:ring-black/15"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm text-foreground/60">{c.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your catalog",
      desc: "Bulk upload SKUs with images, descriptions, wholesale price and stock count.",
    },
    {
      icon: Users,
      title: "Resellers import",
      desc: "Reseller stores on the LunexWeb network pull your products into their storefronts.",
    },
    {
      icon: PackageCheck,
      title: "We route the order",
      desc: "When a customer buys, the order lands in your dashboard with shipping label ready.",
    },
    {
      icon: Truck,
      title: "You ship, get paid",
      desc: "You fulfill from your warehouse. Drop Direct settles your wholesale payout automatically.",
    },
  ];
  return (
    <section id="how" className="border-b border-black/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            From catalog to payout in four steps.
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-black/5 sm:grid-cols-2 lg:grid-cols-4">
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

function VideoExplainer() {
  return (
    <section className="border-b border-black/5 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
          See it in action
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Watch how Drop Direct works.
        </h2>
        <div className="relative mx-auto mt-12 aspect-video overflow-hidden rounded-3xl bg-surface-elevated ring-1 ring-black/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow shadow-lg">
              <Play className="ml-1 h-8 w-8 text-foreground" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-sm font-semibold text-white">Product explainer — 2 min</p>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-sm text-foreground/60">
          A quick walkthrough of how your catalog reaches reseller stores, how orders
          flow to your warehouse, and how payouts work — all on autopilot.
        </p>
      </div>
    </section>
  );
}

function ForSuppliers() {
  const features = [
    {
      icon: Boxes,
      title: "List once, sell everywhere",
      desc: "Your catalog gets distributed across every reseller store on the network — no extra work per shop.",
    },
    {
      icon: ShieldCheck,
      title: "Verified payouts",
      desc: "Drop Direct holds customer funds and settles your wholesale share automatically on each fulfilled order.",
    },
    {
      icon: LineChart,
      title: "Demand insights",
      desc: "See which SKUs are trending, which stores drive your sales, and where to push more stock.",
    },
    {
      icon: Store,
      title: "You stay in control",
      desc: "Set wholesale prices, MOQs, and shipping zones. Pause or update any SKU at any time.",
    },
  ];
  return (
    <section id="suppliers" className="border-b border-black/5 bg-surface-elevated/20 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/10">
            <img
              src={warehouse}
              alt="Supplier warehouse with packed boxes ready to ship"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden w-64 rounded-2xl bg-surface-elevated p-4 ring-1 ring-black/10 backdrop-blur-md sm:block">
            <p className="text-xs text-foreground/60">Orders this week</p>
            <p className="mt-1 text-2xl font-bold">2,418</p>
            <p className="mt-1 text-xs text-brand-yellow">across 184 reseller stores</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            For suppliers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Distribute through hundreds of stores — without managing them.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-foreground/65">
            Upload your products once. Drop Direct does the rest: matching, syncing,
            routing orders, and settling payouts. You focus on stock and shipping.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
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
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            Apply as a supplier
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ShippingSection() {
  return (
    <section className="border-b border-black/5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-yellow">
            Fulfillment
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            We make shipping effortless.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-foreground/65">
            When orders come in, Drop Direct routes them straight to your warehouse.
            Print labels, pack, and ship — all from one dashboard. No spreadsheets,
            no missed orders.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Integrated shipping labels</h3>
                <p className="mt-1 text-sm text-foreground/60">Auto-generated for every order</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <PackageCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Real-time tracking</h3>
                <p className="mt-1 text-sm text-foreground/60">Customers and resellers see updates instantly</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/10 text-brand-yellow">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Verified delivery</h3>
                <p className="mt-1 text-sm text-foreground/60">Proof of delivery triggers automatic payout</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="order-1 overflow-hidden rounded-3xl ring-1 ring-black/10 lg:order-2">
          <img
            src={shippingImage}
            alt="Packages being prepared for shipping in a modern warehouse"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}

function LunexBridge() {
  return (
    <section id="partner" className="border-b border-black/5 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-surface-elevated to-background p-10 sm:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-background px-3 py-1 text-xs font-medium text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Official partner
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Powered by the <span className="text-brand-yellow">LunexWeb</span> store network.
            </h2>
            <p className="mt-5 text-base text-foreground/65">
              LunexWeb builds and manages the online stores that resellers run. Drop
              Direct's API is exclusively integrated with those stores — so your
              products plug straight into a verified, fully-built storefront network.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-2xl bg-background/60 p-6 text-center ring-1 ring-black/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Storefront partner
              </p>
              <h3 className="mt-2 text-xl font-bold">LunexWeb</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Builds and runs the online stores resellers sell from.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="hidden h-px w-12 bg-gradient-to-r from-transparent via-brand-yellow to-transparent lg:block" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellow text-foreground">
                <ArrowRight className="h-5 w-5" />
              </div>
              <div className="hidden h-px w-12 bg-gradient-to-r from-brand-yellow via-brand-yellow to-transparent lg:block" />
            </div>
            <div className="rounded-2xl bg-background/60 p-6 text-center ring-1 ring-black/10">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
                Supplier layer (you)
              </p>
              <h3 className="mt-2 text-xl font-bold">Drop Direct</h3>
              <p className="mt-2 text-sm text-foreground/60">
                Routes orders from those stores to your warehouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I sell directly to customers?",
      a: "No. Resellers list your products on their own LunexWeb stores and handle the customer. You only see the order to fulfill.",
    },
    {
      q: "Who sets the retail price?",
      a: "You set the wholesale price. Resellers add their own margin on top when listing in their store.",
    },
    {
      q: "How do I get paid?",
      a: "Drop Direct collects payment from the reseller's store, holds it until the order ships, then settles your wholesale share automatically.",
    },
    {
      q: "Can resellers integrate without LunexWeb?",
      a: "Drop Direct's API is exclusively integrated with LunexWeb stores. This keeps the network verified and the experience consistent for suppliers.",
    },
    {
      q: "What does it cost to list?",
      a: "Listing is free. Drop Direct only takes a small percentage on successfully fulfilled orders.",
    },
  ];
  return (
    <section className="border-b border-black/5 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Common questions
        </h2>
        <div className="mt-12 divide-y divide-black/10 rounded-2xl bg-surface-elevated/40 ring-1 ring-black/10">
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
          Your catalog. Their storefronts.
          <br />
          <span className="text-brand-yellow">One distribution layer.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/65">
          Join the suppliers powering South Africa's fastest-growing reseller network.
        </p>
        <Link
          to="/auth"
          className="mt-9 inline-flex h-12 items-center gap-2 rounded-xl bg-brand-yellow px-6 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
        >
          Apply as a supplier
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <Logo />
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} Drop Direct. Official partner of LunexWeb.
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
