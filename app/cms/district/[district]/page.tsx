import {districts} from "@/lib/lists";
import CmsGrid from "@/components/rsc/cmsGrid";

export async function generateStaticParams() {
    return districts.map((district) => ({
        district: `${district}`
    }));
}
export const runtime = 'edge'

export default function RoutePage({params}: { params: { district: string } }) {
    return (
        <div>
            {
                /*
                <TypographyLarge>District {params.district}</TypographyLarge>
                 */
            }
            <CmsGrid district={params.district}/>
        </div>
    )
}
