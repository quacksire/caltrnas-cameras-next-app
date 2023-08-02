
import {counties} from "@/lib/lists";
import CameraGrid from "@/components/rsc/cameraGrid";

export async function generateStaticParams() {
    return counties.map((county) => ({
        county: `${String(county).toLowerCase()}`
    }));
}

export default function RoutePage({ params }: { params: { county: string }}) {
    return (
        <div>
            <h1>{decodeURI(params.county)}</h1>
            <CameraGrid county={decodeURI(params.county)} />
        </div>
    )
}