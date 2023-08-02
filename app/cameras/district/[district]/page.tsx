
import {districts} from "@/lib/lists";
import CameraGrid from "@/components/rsc/cameraGrid";

export async function generateStaticParams() {
    return districts.map((district) => ({
        district: `${district}`
    }));
}

export default function RoutePage({ params }: { params: { district: string }}) {
    return (
        <div>
            <h1>{decodeURI(params.district)}</h1>
            <CameraGrid district={decodeURI(params.district)} />
        </div>
    )
}