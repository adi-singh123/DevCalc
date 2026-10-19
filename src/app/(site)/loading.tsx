export default function SiteLoading() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-12" aria-live="polite" aria-busy="true">
      <div className="h-4 w-44 animate-pulse rounded bg-stone-200 dark:bg-slate-800" />
      <div className="mt-6 h-12 max-w-2xl animate-pulse rounded-xl bg-stone-200 dark:bg-slate-800" />
      <div className="mt-4 h-6 max-w-3xl animate-pulse rounded bg-stone-100 dark:bg-slate-800/70" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="h-96 animate-pulse rounded-3xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900" />
        <div className="hidden h-80 animate-pulse rounded-2xl border border-stone-200 bg-white lg:block dark:border-slate-800 dark:bg-slate-900" />
      </div>
      <span className="sr-only">Loading page</span>
    </main>
  );
}
