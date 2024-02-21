import {urlToDisplay} from "@/lib/utils";

type District = number;
type Thing = string;
import { counties, countyDistricts } from "@/lib/lists";
/**
 * Fetches data from the Caltrans API
 * @param district {District} - The district to fetch data from
 * @param thing {Thing} - The type of data to fetch
 *
 * @returns {Object} - The data fetched from the API
 */
export async function fetchData(district: District, thing: Thing): Promise<any> {
    const validDistricts: District[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const validThings: Thing[] = ["cctv", "cms", "cc", "tt", "rwis"];

    //console.log(district, thing)

    if (!validDistricts.includes(district) || !validThings.includes(thing)) {
        throw new Error('Invalid district or thing');
    }

    const districtStr = district < 10 ? `0${district}` : `${district}`;
    let data = [];

    switch (thing) {
        case "cctv":
            const cctvRes = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/cctv/cctvStatusD${districtStr}.json`);
            const cctvData = await cctvRes.json();
            data = cctvData.data.map((item: { cctv: any; }) => item?.cctv);
            break;
        case "cms":
            const cmsRes = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/cms/cmsStatusD${districtStr}.json`);
            const cmsData = await cmsRes.json();
            data = cmsData.data.map((item: { cms: any; }) => item?.cms);
            break;
        case "cc":
            const ccRes = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/cc/ccStatusD${districtStr}.json`);
            const ccData = await ccRes.json();
            data = ccData.data.map((item: { cc: any; }) => item?.cc);
            break;
        case "tt":
            const ttRes = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/tt/ttStatusD${districtStr}.json`);
            const ttData = await ttRes.json();
            data = ttData.data.map((item: { tt: any; }) => item?.tt);
            break;
        case "rwis":
            const rwisRes = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/rwis/rwisStatusD${districtStr}.json`);
            const rwisData = await rwisRes.json();
            data = rwisData.data.map((item: { rwis: any; }) => item?.rwis);
            break;
        default:
            throw new Error('Invalid thing');
    }

    return data;
}


export async function getDataForSpecific(district: number, thing: string, specific: string): Promise<any> {
    if (!district || !thing || !specific) {
        throw new Error('Missing parameters');
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
        const countyName = urlToDisplay(specific.replace('county-', ''));
        const districtOfCounty = countyDistricts[counties.findIndex((item: any) => String(item).toLowerCase() === String(urlToDisplay(countyName)).toLowerCase())];
        //console.log(countyName, districtOfCounty, thing)
        data = await fetchData(districtOfCounty, thing);
    } else {
        throw new Error('Invalid specific parameter');
    }

    return data;
}
