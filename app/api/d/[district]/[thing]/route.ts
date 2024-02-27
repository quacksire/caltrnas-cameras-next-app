export const runtime = 'edge';
export async function GET(request: Request, {params}: { params: { district: number, thing: string } }) {
    if (!params.district || !params.thing) {
        return new Response('Missing parameters', {status: 400})
    }

    let district = params.district < 10 ? `0${params.district}` : `${params.district}`

    switch (params.thing) {
        case "cctv":
            let cctv = []
            //https://cwwp2.dot.ca.gov/data/d4/cctv/cctvStatusD04.json
            let cctv_res = await fetch(`https://cwwp2.dot.ca.gov/data/d${params.district}/cctv/cctvStatusD${district}.json`, {next: {revalidate: 3600}})
            let cctv_data = await cctv_res.json()
            cctv.push(...cctv_data.data)
            return new Response(JSON.stringify(cctv.map(item => item?.cctv)))
            break;
        case "cms":
            let cms = []
            let cms_res = await fetch(`https://cwwp2.dot.ca.gov/data/d${params.district}/cms/cmsStatusD${district}.json`)
            let cms_data = await cms_res.json()
            cms.push(...cms_data.data)
            return new Response(JSON.stringify(cms.map(item => item?.cms)))
            break
        case 'rwis':
            // check if the districts is 2,3,6,8,9, or 10, and return an error if it is not
            if (![2, 3, 6, 8, 9, 10].includes(params.district)) {
                return new Response(JSON.stringify({error: "District not supported"}))
            }
            // follow the earlier structure
            let rwis = []
            let rwis_res = await fetch(`https://cwwp2.dot.ca.gov/data/d${params.district}/rwis/rwisStatusD${district}.json`, {next: {revalidate: 3600}})
            let rwis_data = await rwis_res.json()
            rwis.push(...rwis_data.data)
            return new Response(JSON.stringify(rwis.map(item => item?.rwis)))
            break;
        case 'cc':
            // check if the district is 1,2,3,6,7,8,9,10 or 11, and return an error if it is not
            if (![1, 2, 3, 6, 7, 8, 9, 10, 11].includes(params.district)) {
                return new Response(JSON.stringify({error: "District not supported"}))
            }

            //follow the earlier structure
            let cc = []
            let cc_res = await fetch(`https://cwwp2.dot.ca.gov/data/d${params.district}/cc/ccStatusD${district}.json`, {next: {revalidate: 3600}})
            let cc_data = await cc_res.json()
            cc.push(...cc_data.data)
            return new Response(JSON.stringify(cc.map(item => item?.cc)))
        case 'tt':
            // check if the district is 3,8,11, or 12, and return an error if it is not
            if (![3, 8, 11, 12].includes(params.district)) {
                return new Response(JSON.stringify({error: "District not supported"}))
            }

            //follow the earlier structure
            let tt = []
            let tt_res = await fetch(`https://cwwp2.dot.ca.gov/data/d${params.district}/tt/ttStatusD${district}.json`, {next: {revalidate: 3600}})
            let tt_data = await tt_res.json()
            tt.push(...tt_data.data)
            return new Response(JSON.stringify(tt.map(item => item?.tt)))
        default:
            return new Response(JSON.stringify({error: "Invalid thing"}))


    }

}
