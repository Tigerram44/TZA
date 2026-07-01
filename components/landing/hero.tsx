import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">

        {/* Left Content */}

        <div className="max-w-2xl">

          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-blue-600">
            Modern Assessment Platform
          </p>

          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
            Assess Skills.
            <br />
            Challenge Minds.
            <br />
            Build Excellence.
          </h1>

          <p className="mt-8 text-lg text-muted-foreground">
            Conduct coding contests, aptitude tests,
            technical assessments and academic competitions
            from a single, powerful platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">
              Start Testing
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Create Contest
            </Button>

          </div>

        </div>

        {/* Right Card */}

        <div className="w-full max-w-lg rounded-2xl border bg-card p-6 shadow-xl">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="font-semibold">
              Coding Challenge
            </h2>

            <span className="rounded bg-green-500 px-3 py-1 text-sm text-white">
              LIVE
            </span>

          </div>

          <div className="rounded-lg bg-zinc-950 p-5 font-mono text-sm text-green-400">

{`int main() {

    printf("Hello World");

    return 0;

}`}

          </div>

          <div className="mt-6 flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                Time Remaining
              </p>

              <h3 className="font-bold">
                01 : 28 : 42
              </h3>

            </div>

            <Button>
              Submit
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}