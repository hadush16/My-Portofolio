import { DashboardSidebar } from "../DashboardSidebar";
import { ThemeProvider } from "../ThemeProvider";

export default function DashboardSidebarExample() {
  return (
    <ThemeProvider>
      <DashboardSidebar role="admin" />
    </ThemeProvider>
  );
}
