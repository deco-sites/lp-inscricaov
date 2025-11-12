import { AppContext } from "../apps/site.ts";
import { SectionProps } from "@deco/deco";

export interface Props {
  /**
   * @title Google Tag Manager ID
   * @description Your GTM container ID (GTM-XXXXXXX)
   */
  trackingId: string;
}

export default function GoogleTagManager(
  { trackingId }: SectionProps<typeof loader>,
) {
  if (!trackingId) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager - Head */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${trackingId}');
          `,
        }}
      />

      {/* Google Tag Manager - Body (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${trackingId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        >
        </iframe>
      </noscript>
    </>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return {
    ...props,
  };
};
