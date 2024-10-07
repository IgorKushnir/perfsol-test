/* eslint-disable  @typescript-eslint/no-explicit-any */
// import { roboto } from "@/components/Fonts";
// import { DefaultSeo } from "@/components/Seo";
import { ApplicationContext } from "@/context";
import { globalStyles } from "@/styles/styles";
import { Global } from "@emotion/react";
// import { GoogleTagManager } from "@next/third-parties/google";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <ApplicationContext>
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="preload"
          fetchPriority="auto"
          as="image"
          href="/img/svg/logo.svg"
        />
      </Head>
      {/* <DefaultSeo /> */}
      <Global styles={globalStyles} />
      <div >
        <Component {...pageProps} />
      </div>
      {/* {process.env.NODE_ENV === "production" && (
        <>
          <GoogleTagManager gtmId="GTM-PG8VWV7" />
        </>
      )} */}
    </ApplicationContext>
  );
}

export default appWithTranslation(MyApp);
