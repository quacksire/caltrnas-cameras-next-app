import {urlToDisplay} from "@/lib/utils";
import {counties, countyDistricts} from "@/lib/lists";


export async function GET(request: Request, { params }: { params: { district: string, thing: string, specific: string } }) {
    if (!params.district || !params.thing || !params.specific) {
       return { status: 404 };
    }
    let base_api_url = new URL(request.url).origin



    const district = params.district
    const thing = params.thing
    const specific = params.specific

    /**
     * specific == `district-${district}` || `route-${route}` || `county-${county}`
     */


    if (specific.startsWith('district-')) {
        return await fetch(base_api_url +'/api/d/' + district + '/' + thing)
    }
    if (specific.startsWith('route-')) {
        let list = []

        // loop through all the districts and get the thing
        for (let i = 1; i <= 12; i++) {
            let district = i < 10 ? `0${i}` : i
            let res = await fetch(`${base_api_url}/api/d/` + i + '/' + thing)
            let data = await res.json()
            list.push(...data)
        }
        return new Response(JSON.stringify(list.filter((item: any) => item.location.route === specific.replace('route-', ''))))
    }
    if (specific.startsWith('county-')) {
        let c = urlToDisplay(specific.split('-')[1])
        let districtOfCounty = countyDistricts[counties.findIndex((item: any) => item.name === c)]

        let list = []
        let district = districtOfCounty < 10 ? `0${districtOfCounty}` : districtOfCounty
        let res = await fetch(base_api_url +'/api/d/' + district + '/' + thing)
        let data = await res.json()
        list.push(...data)

        return new Response(JSON.stringify(list))
    }


}
