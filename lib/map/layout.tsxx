
import dynamic from "next/dynamic";

export default async function MapLayout({ children }: { children: React.ReactNode }) {
    let res = await fetch(`https://caltrans-cameras.quacksire.workers.dev/`, { cache: 'no-store' })
    let data = await res.json()
    let cams = data.map((item: {
        cctv: any}) => item.cctv)


    const MapWithNoSSR = dynamic(() => import("../../components/maps/Map"), {
        ssr: false
    });

    return (
        <div>
            <MapWithNoSSR>
                {children}
            </MapWithNoSSR>
        </div>
    )
}