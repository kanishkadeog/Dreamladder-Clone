import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
           rel="stylesheet"
        />
     </head>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}