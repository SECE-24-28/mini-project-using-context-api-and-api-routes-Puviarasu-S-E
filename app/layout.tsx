import { ReactNode } from "react";
import { TodoProvider } from "./context/TodoContext";

export const metadata = { title: "Todo App" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}
