
import {routes} from "@/lib/lists";
import {TypographyLarge} from "@/components/ui/typography";
import CmsGrid from "@/components/rsc/cmsGrid";

export async function generateStaticParams() {
    return routes.map((route) => ({
        route: `${route}`
    }));
}

export default async function RoutePage({ params }: { params: { route: string }}) {

    return (
        <div>
            <TypographyLarge>{params.route}</TypographyLarge>
            <CmsGrid route={params.route} />
        </div>
    )
}