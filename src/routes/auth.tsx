import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Mail, Check, Play, TrendingUp } from "lucide-react";

import electronics from "@/assets/product-electronics.jpg";
import beauty from "@/assets/product-beauty.jpg";
import home from "@/assets/product-home.jpg";
import fitness from "@/assets/product-fitness.jpg";
import fashion from "@/assets/product-fashion.jpg";
import electronicsVideo from "@/assets/product-electronics.mp4.asset.json";
import beautyVideo from "@/assets/product-beauty.mp4.asset.json";
import fashionVideo from "@/assets/product-fashion.mp4.asset.json";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Drop Direct" },
      {
        name: "description",
        content:
          "Join Drop Direct — source winning dropshipping products and high-converting ad creatives.",
      },
      { property: "og:title", content: "Sign in — Drop Direct" },
      {
        property: "og:description",
        content: "Source winning dropshipping products and ad creatives in seconds.",
      },
    ],
  }),
  component: AuthPage,
});

type Slide = {
  image: string;
  video?: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  margin: string;
  orders: string;
};

const slides: Slide[] = [
  {
    image: electronics,
    video: electronicsVideo.url,
    category: "Electronics",
    title: "WIRELESS PRO",
    subtitle: "Trending earbuds with 4.2x ROAS on TikTok shop creatives",
    tags: ["Viral on TikTok", "High Margin", "Fast Shipping"],
    margin: "62% margin",
    orders: "12.4K orders / week",
  },
  {
    image: beauty,
    video: beautyVideo.url,
    category: "Beauty & Skincare",
    title: "GLOW SERUM",
    subtitle: "Best-selling skincare with UGC-ready before & after demos",
    tags: ["UGC Ready", "Repeat Buyers", "Sub $8 COGS"],
    margin: "71% margin",
    orders: "8.9K orders / week",
  },
  {
    image: home,
    category: "Home & Living",
    title: "AURA DIFFUSER",
    subtitle: "Premium home aesthetic with cozy lifestyle video ads",
    tags: ["Lifestyle Hook", "Evergreen", "Gift-able"],
    margin: "58% margin",
    orders: "6.2K orders / week",
  },
  {
    image: fitness,
    category: "Fitness",
    title: "POWER FLEX",
    subtitle: "Adjustable home gym kit with transformation video creatives",
    tags: ["Q1 Trending", "Demo Friendly", "Premium AOV"],
    margin: "54% margin",
    orders: "4.7K orders / week",
  },
  {
    image: fashion,
    video: fashionVideo.url,
    category: "Fashion & Accessories",
    title: "VELOUR WATCH",
    subtitle: "Luxury-feel timepiece, perfect for Instagram reel angles",
    tags: ["Influencer Tested", "Gift Season", "Low Returns"],
    margin: "66% margin",
    orders: "9.1K orders / week",
  },
];

function AuthPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <main className="min-h-screen bg-background text-foreground font-display lg:grid lg:grid-cols-2">
      {/* LEFT — Auth */}
      <section className="relative flex min-h-screen flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="m-auto w-full max-w-md">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background shadow-[0_0_40px_-10px_var(--brand-yellow)]">
              <span className="text-2xl font-bold tracking-tighter">
                D<span className="text-brand-yellow">D</span>
              </span>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Welcome to Drop Direct
            </h1>
            <p className="mt-3 text-base text-foreground/60">
              Sign in or create an account to start sourcing winning products
            </p>
          </div>

          <div className="mt-10 space-y-3">
            <button
              type="button"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-surface-elevated px-4 text-base font-medium text-foreground ring-1 ring-white/5 transition-all hover:bg-surface-input hover:ring-white/10"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <GoogleIcon />
              </span>
              Continue with Google
            </button>

            <div className="flex items-center gap-4 py-2">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs uppercase tracking-widest text-foreground/40">
                or
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <button
              type="button"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-surface-elevated px-4 text-base font-medium text-foreground ring-1 ring-white/5 transition-all hover:bg-surface-input hover:ring-white/10"
            >
              <Mail className="h-5 w-5" />
              Continue with Email
            </button>
          </div>

          <p className="mt-10 text-center text-xs leading-relaxed text-foreground/40">
            By continuing, I acknowledge the{" "}
            <a href="#" className="underline underline-offset-2 hover:text-foreground/70">
              Privacy Policy
            </a>{" "}
            and agree to the{" "}
            <a href="#" className="underline underline-offset-2 hover:text-foreground/70">
              Terms of Use
            </a>
            .
            <br />I also confirm that I am at least 18 years old.
          </p>
        </div>
      </section>

      {/* RIGHT — Product showcase */}
      <aside className="relative hidden min-h-screen overflow-hidden lg:block">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === index ? 1 : 0 }}
            aria-hidden={i !== index}
          >
            {s.video ? (
              <video
                src={s.video}
                poster={s.image}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={s.image}
                alt={s.title}
                width={1280}
                height={1280}
                loading={i === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          </div>
        ))}

        {/* Controls */}
        <div className="absolute right-6 top-6 z-10 flex gap-2">
          <button
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-foreground backdrop-blur-md ring-1 ring-white/20 transition-colors hover:bg-white/20"
            aria-label="Previous product"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-foreground backdrop-blur-md ring-1 ring-white/20 transition-colors hover:bg-white/20"
            aria-label="Next product"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Video badge */}
        <button
          type="button"
          className="absolute right-6 top-24 z-10 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground backdrop-blur-md ring-1 ring-white/20 transition-colors hover:bg-white/20"
        >
          <Play className="h-3 w-3 fill-current" />
          Watch creative
        </button>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 p-10">
          <div className="flex flex-wrap gap-2">
            {slide.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-foreground ring-1 ring-white/15 backdrop-blur-sm"
              >
                <Check className="h-3.5 w-3.5 text-brand-yellow" strokeWidth={3} />
                {t}
              </span>
            ))}
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
              {slide.category}
            </p>
            <h2 className="mt-3 text-5xl font-black tracking-tight text-foreground sm:text-6xl xl:text-7xl">
              {slide.title}
            </h2>
            <p className="mt-3 max-w-xl text-base text-foreground/75">{slide.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/80">
            <span className="inline-flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-brand-yellow" />
              {slide.margin}
            </span>
            <span className="h-1 w-1 rounded-full bg-foreground/30" />
            <span>{slide.orders}</span>
          </div>

          {/* Category pills */}
          <div className="mt-2 flex flex-wrap gap-2 rounded-2xl bg-black/40 p-2 ring-1 ring-white/10 backdrop-blur-md">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  i === index
                    ? "bg-white/15 text-foreground"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>

          {/* Progress bars */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/15"
              >
                <div
                  className="h-full rounded-full bg-brand-yellow transition-all duration-500"
                  style={{
                    width: i < index ? "100%" : i === index ? "100%" : "0%",
                    transition:
                      i === index ? "width 5s linear" : "width 0.4s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}
