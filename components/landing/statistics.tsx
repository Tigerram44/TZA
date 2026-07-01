import {
  Users,
  FileCheck,
  Code2,
  ShieldCheck,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "12K+",
    title: "Students",
  },
  {
    icon: FileCheck,
    value: "850+",
    title: "Assessments",
  },
  {
    icon: Code2,
    value: "50+",
    title: "Coding Problems",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    title: "Platform Reliability",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Statistics
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Platform in Numbers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Built to support academic institutions,
            coding competitions and technical events
            with speed, reliability and scalability.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-xl border bg-card p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">

                  <Icon
                    size={32}
                    className="text-blue-600"
                  />

                </div>

                <h3 className="text-4xl font-extrabold">
                  {item.value}
                </h3>

                <p className="mt-3 text-muted-foreground">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}