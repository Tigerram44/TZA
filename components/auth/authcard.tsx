import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-lg">

      <div className="mb-8 text-center">

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="mt-3 text-muted-foreground">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}