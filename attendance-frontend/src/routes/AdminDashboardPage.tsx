export default function DashboardPage() {
  return (
    <div
      className="min-h-screen bg-[#12151C] text-[#E8EAEF]"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      <header className="border-b border-[#2A2F3B] px-6 py-4">
        <h1
          className="text-lg font-medium tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Access Console
        </h1>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <p className="text-sm text-[#8B93A7]">
          Dashboard content goes here — card stats, recent taps, quick
          actions.
        </p>
      </main>
    </div>
  );
}