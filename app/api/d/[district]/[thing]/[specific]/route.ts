import {fetchData} from "@/lib/fetchData";
import {counties, countyDistricts} from "@/lib/lists";
export const runtime = 'edge';
export async function GET(request: Request, {params}: {
    params: { district: string, thing: string, specific: string }
}) {
    if (!params.district || !params.thing || !params.specific) {
        return new Response('Missing parameters', {status: 400});
    }

    const district = Number(params.district);
    const thing = params.thing;
    const specific = params.specific;

    if (isNaN(district) || district < 1 || district > 12) {
        return new Response('Invalid district', {status: 400});
    }

    let data = [];

    if (specific.startsWith('district-')) {
        data = await fetchData(district, thing);
    } else if (specific.startsWith('route-')) {
        const route = specific.replace('route-', '');
        for (let i = 1; i <= 12; i++) {
            const districtNumber = i < 10 ? `0${i}` : `${i}`;
            const districtData = await fetchData(i, thing);
            data.push(...districtData.filter((item: any) => item.location.route === route));
        }
    } else if (specific.startsWith('county-')) {
        const countyName = specific.split('-')[1];
        const districtOfCounty = countyDistricts[counties.findIndex((item: any) => item.name === countyName)];
        const districtNumber = districtOfCounty < 10 ? `0${districtOfCounty}` : `${districtOfCounty}`;
        data = await fetchData(Number(districtNumber), thing);
    } else {
        return new Response('Invalid specific parameter', {status: 400});
    }

    return new Response(JSON.stringify(data));
}
