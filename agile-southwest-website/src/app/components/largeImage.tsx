import Image from "next/image";
import styling from "@/app/Components.module.css";

interface LargeImageProps {
    imageUrl: string;
    altText: string;
    width?: number;
    height?: number;
}

export default function LargeImage({ imageUrl, altText, width = 1200, height = 800 }: LargeImageProps) {
    return (
        <div className={styling.imageWrapper}>
            <Image
                src={imageUrl}
                alt={altText}
                width={width}
                height={height}
                layout="responsive"
                priority
            />
        </div>
    );
}
