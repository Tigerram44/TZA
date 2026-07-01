import { CalendarDays, Users, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "COSMOS Coding Challenge",
    date: "July 25, 2026",
    participants: "300+",
    category: "Coding Contest",
  },
  {
    title: "TECHZONE Aptitude Assessment",
    date: "August 02, 2026",
    participants: "500+",
    category: "Aptitude Test",
  },
  {
    title: "Weekend Practice Contest",
    date: "Every Weekend",
    participants: "Unlimited",
    category: "Practice",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Upcoming Events
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Join the Next Challenge
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Participate in coding competitions,
            aptitude assessments and technical events.
          </p>

        </div>

        {/* Event Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {events.map((event) => (

            <div
              key={event.title}
              className="rounded-xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-semibold">
                {event.title}
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3 text-muted-foreground">
                  <CalendarDays size={18} />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users size={18} />
                  <span>{event.participants} Participants</span>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <Tag size={18} />
                  <span>{event.category}</span>
                </div>

              </div>

              <Button className="mt-8 w-full">
                Register
              </Button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}