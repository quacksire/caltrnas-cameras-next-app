import Image from "next/image";
import {cn} from "@/lib/utils";

export default function Shield({route, width = 50, height = 50, className}: {route: string, width?: number, height?: number, className?: string}) {
    return (
            <Image
                src={`https://shields.caltranscameras.app/${route}.svg`}
                alt={route}
                width={width || 50}
                height={height || 50}
                className={cn(className, 'p-5')}
                blurDataURL={`https://shields.caltranscameras.app/${route}.svg`}
            />
    );
}