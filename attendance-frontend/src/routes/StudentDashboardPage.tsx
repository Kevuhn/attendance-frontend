// Mock data — replace with TanStack Query calls to your backend later.
const card = {
  holder: "Alex Morgan",
  studentId: "1029384",
  lastDigits: "4F2A",
  status: "Active" as "Active" | "Suspended" | "Expired",
  expires: "Aug 31, 2027",
};

const access = [
  { place: "Science Complex, Main Entrance", window: "Always" },
  { place: "Library, Study Floors", window: "Daily 7:00 AM - 11:00 PM" },
  { place: "Computer Lab 214", window: "Mon-Fri 8:00 AM - 6:00 PM" },
  { place: "Exam Hall B", window: "During scheduled exams" },
];

const activity = [
  { when: "Today, 9:02 AM", place: "Science Complex, Main Entrance", granted: true },
  { when: "Today, 9:41 AM", place: "Computer Lab 214", granted: true },
  { when: "Yesterday, 9:15 PM", place: "Library, Study Floors", granted: true },
  { when: "Yesterday, 7:48 PM", place: "Computer Lab 214", granted: false },
  { when: "Mon, 8:55 AM", place: "Exam Hall B", granted: true },
];

const attendance = [
  { course: "CIS*2750", name: "Software Systems Development", attended: 11, total: 12 },
  { course: "MATH*2130", name: "Linear Algebra", attended: 9, total: 12 },
  { course: "CIS*3760", name: "Software Engineering", attended: 12, total: 12 },
  { course: "STAT*2040", name: "Statistics I", attended: 6, total: 11 },
];

const statusStyles: Record<typeof card.status, string> = {
  Active: "border-[#3E7A5C] text-[#7FD1A3]",
  Suspended: "border-[#E8A33D] text-[#E8A33D]",
  Expired: "border-[#E8756A] text-[#E8756A]",
};

export default function StudentDashboardPage() {
  return (
    <div
      className="min-h-screen bg-[#12151C] text-[#E8EAEF]"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      <header className="flex items-center justify-between border-b border-[#2A2F3B] px-6 py-4">
        <h1
          className="text-lg font-medium tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          My Access
        </h1>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-[#8B93A7]">{card.holder}</span>
          <button className="text-[#8B93A7] underline decoration-[#2A2F3B] underline-offset-4 hover:text-[#E8EAEF]">
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-6 py-8 md:grid-cols-2">
        {/* My card */}
        <Panel title="My card" className="md:col-span-2">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <dl className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3">
              <Field label="Card ending in" value={card.lastDigits} mono />
              <Field label="Student ID" value={card.studentId} mono />
              <Field label="Expires" value={card.expires} />
            </dl>
            <span
              className={`border px-3 py-1 text-sm ${statusStyles[card.status]}`}
            >
              {card.status}
            </span>
          </div>
        </Panel>

        {/* My access */}
        <Panel title="Where my card works">
          <ul className="divide-y divide-[#2A2F3B]">
            {access.map((a) => (
              <li key={a.place} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm">{a.place}</p>
                <p className="text-sm text-[#8B93A7]">{a.window}</p>
              </li>
            ))}
          </ul>
        </Panel>

        {/* Recent activity */}
        <Panel title="Recent activity">
          <ul className="divide-y divide-[#2A2F3B]">
            {activity.map((a, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="text-sm">{a.place}</p>
                  <p className="text-sm text-[#8B93A7]">{a.when}</p>
                </div>
                <span
                  className={`shrink-0 text-sm ${
                    a.granted ? "text-[#7FD1A3]" : "text-[#E8756A]"
                  }`}
                >
                  {a.granted ? "Granted" : "Denied"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[#8B93A7]">
            Don't recognize a tap? Contact IT right away.
          </p>
        </Panel>

        {/* Attendance */}
        <Panel title="Attendance" className="md:col-span-2">
          <ul className="grid gap-6 sm:grid-cols-2">
            {attendance.map((c) => {
              const pct = Math.round((c.attended / c.total) * 100);
              return (
                <li key={c.course}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm">
                      <span className="font-medium">{c.course}</span>{" "}
                      <span className="text-[#8B93A7]">{c.name}</span>
                    </p>
                    <p className="shrink-0 text-sm text-[#8B93A7]">
                      {c.attended} of {c.total} sessions
                    </p>
                  </div>
                  <div
                    className="mt-2 h-1.5 bg-[#12151C]"
                    role="progressbar"
                    aria-valuenow={pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${c.course} attendance`}
                  >
                    <div
                      className={`h-full ${
                        pct < 60 ? "bg-[#E8756A]" : "bg-[#E8A33D]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>
      </main>
    </div>
  );
}

function Panel({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`border border-[#2A2F3B] bg-[#1B1F29] p-6 ${className}`}>
      <h2
        className="mb-4 text-base font-medium"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <dt className="text-sm text-[#8B93A7]">{label}</dt>
      <dd className={`mt-0.5 ${mono ? "font-mono tracking-wide" : ""}`}>
        {value}
      </dd>
    </div>
  );
}