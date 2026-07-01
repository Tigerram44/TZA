import {
    Code2,
    Brain,
    Trophy,
    Clock3,
    BarChart3,
    ShieldCheck
} from "lucide-react";

const features = [
    {
        icon: Code2,
        title: "Coding Challenges",
        description:
            "Create programming contests with an integrated code editor and multiple language support.",
    },
    {
        icon: Brain,
        title: "Aptitude Tests",
        description:
            "Design logical reasoning, quantitative aptitude and technical assessments with ease.",
    },
    {
        icon: Trophy,
        title: "Leaderboards",
        description:
            "Display rankings instantly during contests to increase engagement and competition.",
    },
    {
        icon: Clock3,
        title: "Timed Assessments",
        description:
            "Run secure, time-limited examinations with automatic submission.",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        description:
            "Track performance using detailed reports, statistics and score breakdowns.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Testing",
        description:
            "Built with authentication, role-based access and scalable architecture.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="py-24"
        >
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
                        Features
                    </p>

                    <h2 className="mt-4 text-4xl font-bold">
                        Everything You Need
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                        A complete assessment platform built for coding contests,
                        aptitude tests, technical events and academic evaluations.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="rounded-xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-xl"
                            >

                                <div className="mb-6 w-fit rounded-lg bg-blue-100 p-3 dark:bg-blue-950">

                                    <Icon
                                        className="text-blue-600"
                                        size={30}
                                    />

                                </div>

                                <h3 className="text-xl font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-muted-foreground">
                                    {feature.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}