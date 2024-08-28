import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dynamic-Crop | Intelligent Video Cropping Tool",
  description:
    "Create perfectly framed social media videos with our dynamic cropping tool. Easily set keyframes for smooth transitions between scenes.",
  keywords: [
    "video editing",
    "dynamic crop",
    "keyframe animation",
    "social media video",
    "pan and zoom",
  ],
  authors: [{ name: "Dynamic-Crop Team" }],
  openGraph: {
    title: "Dynamic-Crop: Effortless Video Framing for Social Media",
    description:
      "Transform your movie clips into engaging social media content with our intelligent dynamic cropping tool. Set keyframes, zoom, and pan with ease.",
    url: "https://dynamic-crop.com",
    siteName: "Dynamic-Crop",
    images: [
      {
        url: "https://dynamic-crop.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dynamic-Crop Video Editing Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic-Crop: Smart Video Framing for Social Media",
    description:
      "Create perfectly framed social media videos from movie clips with our intuitive dynamic cropping tool.",
    creator: "@dynamiccrop",
    images: ["https://dynamic-crop.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    // apple: '/apple-touch-icon.png',
  },
  //   verification: {
  //     google: 'your-google-site-verification-code',
  //     yandex: 'your-yandex-verification-code',
  //     bing: 'your-bing-verification-code',
  //   },
  other: {
    "application-name": "Dynamic-Crop",
  },
};
