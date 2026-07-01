import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6 py-12">

      <div className="w-full max-w-md">

        {children}

      </div>

    </main>
  );
}