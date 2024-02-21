
import {districts} from "@/lib/lists";
import CmsGrid from "@/components/rsc/cmsGrid";
import {TypographyLarge} from "@/components/ui/typography";

export async function generateStaticParams() {
    return districts.map((district) => ({
        district: `${district}`
    }));
}

export default function RoutePage({ params }: { params: { district: string }}) {
    return (
        <div>
            {
                /*
                <TypographyLarge>District {params.district}</TypographyLarge>
                 */
            }
            <CmsGrid district={params.district} />
        </div>
    )
}
