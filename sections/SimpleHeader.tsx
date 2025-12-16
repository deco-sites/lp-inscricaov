import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    logo: ImageWidget;
    alt: string;
    width: number;
    height: number;
}

export default function SimpleHeader({ logo, alt, width, height }: Props) {
    return (
        <div class={`bg-[#0d1117] w-full flex items-center justify-center`}>
            <Image
                src={logo}
                alt={alt}
                width={width}
                height={height}
                loading={"eager"}
                decoding={"sync"}
            />
        </div>
    );
}
