import { AuthForm } from "@/components/AuthForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <AuthForm mode="login" />
    </div>
  );
}
