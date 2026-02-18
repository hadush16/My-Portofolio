import { AuthForm } from "../AuthForm";
import { ThemeProvider } from "../ThemeProvider";

export default function AuthFormExample() {
  return (
    <ThemeProvider>
      <div className="p-8 flex items-center justify-center">
        <AuthForm mode="login" />
      </div>
    </ThemeProvider>
  );
}
