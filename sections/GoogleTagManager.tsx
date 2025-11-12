import { Head } from "$fresh/runtime.ts";

export interface Props {
  /**
   * @title GTM Container ID
   * @description Your Google Tag Manager Container ID (e.g., GTM-XXXXXXX)
   */
  containerId?: string;
}

export default function GoogleTagManager({ containerId = "GTM-XXXXXXX" }: Props) {
  if (!containerId || containerId === "GTM-XXXXXXX") {
    return null;
  }

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${containerId}');`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        />
      </noscript>
    </>
  );
}
