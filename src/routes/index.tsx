import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground text-background">
        <span className="text-2xl font-bold tracking-tighter">
          D<span className="text-brand-yellow">D</span>
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight">Drop Direct</h1>
      <p className="max-w-md text-foreground/60">
        Source winning dropshipping products and high-converting ad creatives.
      </p>
      <Link
        to="/auth"
        className="rounded-xl bg-brand-yellow px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        Get started
      </Link>
    </div>
  );
}

