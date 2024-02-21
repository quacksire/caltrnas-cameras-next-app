import {routes} from "@/lib/lists";

export async function generateStaticParams() {
    return routes.map((route) => ({
        route: `${route}`
    }));
}

export default function RoutePage({params}: { params: { route: string } }) {
    return (
        <div>
            <h1>{params.route}</h1>
        </div>
    )
}
