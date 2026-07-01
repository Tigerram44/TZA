import {
  UserPlus,
  ClipboardList,
  LaptopMinimal,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create an Account",
    description:
      "Register as a student, organizer, or administrator to access the platform.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Join or Create a Test",
    description:
      "Enroll in available assessments or create and configure your own examination.",
  },
  {
    icon: LaptopMinimal,
    number: "03",
    title: "Complete the Assessment",
    description:
      "Answer MCQs, solve coding problems, and submit your responses before the timer ends.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "View Results",
    description:
      "Instantly access scores, rankings, analytics, and performance reports.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Workflow
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            How It Works
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Whether you're hosting an assessment or participating in one,
            the workflow is designed to be simple, fast and reliable.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-xl border bg-background p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Step Number */}

                <div className="mb-6 text-5xl font-extrabold text-blue-100 dark:text-blue-950">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mb-5 w-fit rounded-lg bg-blue-100 p-3 dark:bg-blue-950">
                  <Icon className="text-blue-600" size={28} />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-muted-foreground">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}