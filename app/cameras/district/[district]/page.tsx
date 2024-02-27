import {districts} from "@/lib/lists";
import CameraGrid from "@/components/rsc/cameraGrid";

export async function generateStaticParams() {
    return districts.map((district) => ({
        district: `${district}`
    }));
}
export const runtime = 'edge'

export default async function RoutePage({params}: { params: { district: string } }) {
    return (
        <div>
            <CameraGrid district={decodeURI(params.district)}/>
        </div>
    )
}
