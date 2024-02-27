import {
    counties,
    countyDistricts,
    districtHqAddresses,
    districtHqPhoneNumbers,
    districtHqs,
    districtNames
} from "@/lib/lists";
export const runtime = 'edge';

export async function GET(request: Request, {params}: { params: { district: string } }) {
    if (!params.district) {
        return new Response('Missing parameters', {status: 400})
    }
    let base_api_url = new URL(request.url).origin


    const district = params.district || null

    let features = []

    //check if the district is 1,2,3,4,5,6,7,8,9,10,11, or 12, and return an error if it is not
    if (!district || ![1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(parseInt(district))) {
        return new Response(JSON.stringify({error: "Thats not a valid district"}), {status: 400})
    }


    // CCTV
    if (true) {
        features.push('cctv')
    }

    // CMS
    if (true) {
        features.push('cms')
    }

    // RWIS
    if ([2, 3, 6, 8, 9, 10].includes(parseInt(district))) {
        features.push('rwis')
    }

    // Chain Control
    if ([3, 8, 11, 12].includes(parseInt(district))) {
        features.push('cc')
    }

    // Traffic Transmitters
    if ([3, 8, 11, 12].includes(parseInt(district))) {
        features.push('tt')
    }


    let countiesInDistrict: string[] = []

    countyDistricts.forEach((item, index) => {
        if (item === parseInt(district)) {
            countiesInDistrict.push(counties[index])
        }
    })

    let districtName = districtNames[parseInt(district) - 1]
    let hq = districtHqs[parseInt(district) - 1]
    let hqAddr = districtHqAddresses[parseInt(district) - 1]
    let hqNumber = districtHqPhoneNumbers[parseInt(district) - 1]

    return new Response(JSON.stringify(
        {
            district: district,
            name: districtName,
            hq: {
                city: hq,
                address: hqAddr,
                number: hqNumber
            },
            features: features,
            counties: countiesInDistrict
        }))
}
