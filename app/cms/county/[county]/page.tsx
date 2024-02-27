import {counties} from "@/lib/lists";
import CmsGrid from "@/components/rsc/cmsGrid";
import {urlToDisplay} from "@/lib/utils";

export async function generateStaticParams() {
    return counties.map((county) => ({
        county: `${String(county).toLowerCase()}`
    }));
}
export const runtime = 'edge'

export default function RoutePage({params}: { params: { county: string } }) {
    return (
        <div>
            {/*
            <TypographyLarge>{urlToDisplay(decodeURI(params.county))}</TypographyLarge>
            */}
            <CmsGrid county={urlToDisplay(decodeURI(params.county))}/>
        </div>
    )
}
