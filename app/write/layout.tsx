import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import {
  blackHanSans,
  inter,
  lato,
  notosanskr,
  marhey,
  pacifico,
  indieFlower,
  permanentMarker,
} from "@/assets/fonts";
import { Providers } from "@/app/_provider/providers";

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL("https://coggie.dev")
      : new URL("http://localhost:3000"),
  title: {
    template: "%s | Coggie",
    default: "coggie.dev",
  },
  description: "프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.",
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  other: {
    "naver-site-verification": "db583c8efc6a2ebd36e6b839daf24a146b414c49",
  },
  openGraph: {
    title: "coggie.dev",
    description: "프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.",
    url: "https://coggie.dev",
    siteName: "coggie.dev",
    images: [
      {
        url: "https://i.ibb.co/87LtM03/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "coggie.dev",
    description: "프론트엔드 개발 관련 포스팅이 올라오는 coggie.dev입니다.",
    creator: "@coggie",
    images: ["https://i.ibb.co/87LtM03/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-stone-800 dark:text-main-dark dark:bg-main-dark">
      <main className="flex-grow flex flex-col items-center w-full px-5 md:px-5 md:flex-row md:items-baseline font-notosanskr">
        {children}
      </main>
    </div>
  );
}
