import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "./Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto/Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const georgia = localFont({
  src: [
    {
      path: "./Georgia/Georgia-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});
