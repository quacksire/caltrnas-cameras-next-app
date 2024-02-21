import {counties} from "@/lib/lists";
import CameraGrid from "@/components/rsc/cameraGrid";

export async function generateStaticParams() {
    return counties.map((county) => ({
        county: `${String(county).toLowerCase()}`
    }));
}

export default async function RoutePage({params}: { params: { county: string } }) {
    return (
        <div>
            <CameraGrid county={decodeURI(params.county)}/>
        </div>
    )
}
