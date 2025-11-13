import { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  /**
   * @title Favicon SVG
   * @description Cole o código SVG do favicon aqui
   * @format html
   */
  faviconSvg?: HTMLWidget;
  
  /**
   * @title Favicon PNG (fallback)
   * @description URL da imagem PNG para navegadores que não suportam SVG
   */
  faviconPng?: string;
}

export default function Favicon({ faviconSvg, faviconPng }: Props) {
  return (
    <head>
      {faviconSvg && (
        <link
          rel="icon"
          type="image/svg+xml"
          href={`data:image/svg+xml,${encodeURIComponent(faviconSvg)}`}
        />
      )}
      
      {faviconPng && (
        <link rel="icon" type="image/png" href={faviconPng} />
      )}
      
      {faviconPng && (
        <link rel="apple-touch-icon" href={faviconPng} />
      )}
    </head>
  );
}

export const LoadingFallback = () => <div />;
