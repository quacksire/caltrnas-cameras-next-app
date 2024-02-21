import {routes} from "@/lib/lists";

import CameraGrid from "@/components/rsc/cameraGrid";


export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    return routes.map((route) => ({
        route: `${route}`
    }));
}

export default async function RoutePage({params}: { params: { route: string } }) {
    return (
        <div>
            <CameraGrid route={params.route}/>
        </div>
    )
}
