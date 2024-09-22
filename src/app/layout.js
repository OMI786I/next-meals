import "./globals.css";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
