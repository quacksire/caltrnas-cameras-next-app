import {counties} from "@/lib/lists";

export async function generateStaticParams() {
    return counties.map((county) => ({
        county: `${String(county).toLowerCase()}`
    }));
}

export default function RoutePage({params}: { params: { county: string } }) {
    return (
        <div>
            <h1>{decodeURI(params.county)}</h1>
        </div>
    )
}
