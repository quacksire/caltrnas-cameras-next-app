"use server"

import {ScrollArea} from "@/components/ui/scroll-area";
import CmsCard from "@/components/cards/cmsCard";

export default async function CmsGrid({district, route, county} : {district? : string, route? : string, county? : string}) {
    /**
     * 01	once a minute	https://cwwp2.dot.ca.gov/data/d1/cms/cmsStatusD01.json
     * 02	every 5 minutes	https://cwwp2.dot.ca.gov/data/d2/cms/cmsStatusD02.json
     * 03	once a minute	https://cwwp2.dot.ca.gov/data/d3/cms/cmsStatusD03.json
     * 04	once a minute	https://cwwp2.dot.ca.gov/data/d4/cms/cmsStatusD04.json
     * 05	once a minute	https://cwwp2.dot.ca.gov/data/d5/cms/cmsStatusD05.json
     * 06	once a minute	https://cwwp2.dot.ca.gov/data/d6/cms/cmsStatusD06.json
     * 07	once a minute	https://cwwp2.dot.ca.gov/data/d7/cms/cmsStatusD07.json
     * 08	once a minute	https://cwwp2.dot.ca.gov/data/d8/cms/cmsStatusD08.json
     * 09	once a minute	https://cwwp2.dot.ca.gov/data/d9/cms/cmsStatusD09.json
     * 10	once a minute	https://cwwp2.dot.ca.gov/data/d10/cms/cmsStatusD10.json
     * 11	once a minute	https://cwwp2.dot.ca.gov/data/d11/cms/cmsStatusD11.json
     * 12	once a minute	https://cwwp2.dot.ca.gov/data/d12/cms/cmsStatusD12.json
     */


    let cameras = []


    if (!district) {
        // fetch all of them and put them in a single array to be used in the grid
        for (let i = 1; i <= 12; i++) {
            // if the district has a single digit, add a 0 to the front
            let district = i < 10 ? `0${i}` : i
            let res = await fetch(`https://cwwp2.dot.ca.gov/data/d${i}/cms/cmsStatusD${district}.json`, { next: { revalidate: 3600 } })
            let data = await res.json()
            cameras.push(...data.data)
        }
        //@ts-ignore
    }

    if (district) {
        let formattedDistrict = parseInt(district) < 10 ? `0${district}` : district
        let res = await fetch(`https://cwwp2.dot.ca.gov/data/d${district}/cms/cmsStatusD${formattedDistrict}.json`, { next: { revalidate: 3600 } })
        let data = await res.json()
        cameras.push(...data.data)
    }




    let cmsSigns = cameras.map(item => item?.cms)

    console.log(cmsSigns.length)

    //cmsSigns = cmsSigns.filter((item: any) => item.inService === true)

    if (district) {
        cmsSigns = cmsSigns.filter((item: any) => item.location.district === district)
    }
    if (route) {
        cmsSigns = cmsSigns.filter((item: any) => item.location.route === route)
    }
    if (county) {
        cmsSigns = cmsSigns.filter((item: any) => item.location.county === county)
    }


    return (
        <>
            <ScrollArea className={'h-full w-full'}>
                <div className={'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gow-end-auto m-2'}>
                    {cmsSigns.map((cms: any, index: number) => {
                        return (
                            <CmsCard cms={cms} key={index} hideBlank={true} />
                        )
                    } )}
                </div>
            </ScrollArea>

        </>

    )
}
