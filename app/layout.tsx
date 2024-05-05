import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCLA Events Search",
  description: "Find student events and free food at UCLA, University of California Los Angeles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <footer>
          <div className="h-60 w-screen bg-neutral-400 flex flex-col items-center justify-between p-24">
            <div className="w-full lg:max-w-5xl ">
              <h2 className="mb-3 text-2xl font-semibold">Bruin Events</h2>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
