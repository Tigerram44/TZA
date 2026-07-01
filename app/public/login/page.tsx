import AuthLayout from "@/components/auth/authlayout";
import AuthCard from "@/components/auth/authcard";
import LoginForm from "@/components/auth/loginform";

export default function LoginPage() {
  return (
    <AuthLayout>

      <AuthCard
        title="Welcome Back"
        subtitle="Sign in to continue to your dashboard."
      >
        <LoginForm />
      </AuthCard>

    </AuthLayout>
  );
}