"use server"

import {ScrollArea} from "@/components/ui/scroll-area";
import CmsCard from "@/components/cards/cmsCard";
import {getDataForSpecific} from "@/lib/fetchData";

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

    let error = false
    let cmsSigns = []
    try {
        if (district) {
            //cmsSigns = await fetch('/api/d/' + district + '/cms').then(res => res.json())
            cmsSigns = await getDataForSpecific(Number(district), 'cms', `district-${district}`)
        }
        if (route) {
            //console.log(`/api/d/1/cctv/route-${route}`)
            //cmsSigns = await fetch(`/api/d/1/cms/route-${route}`).then(res => res.json())
            cmsSigns = await getDataForSpecific(1, 'cms', `route-${route}`)
        }
        if (county) {
            //console.log(county)
            //cmsSigns = await fetch(`/api/d/1/cms/county-${county}`).then(res => res.json())
            cmsSigns = await getDataForSpecific(1, 'cms', `county-${county}`)
        }
    } catch (e) {
        console.log(e)
        error = true
    }


    return (
        <>
            <div className={'h-full w-full'}>
                <div className={'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-2'}>
                    {cmsSigns.map((cms: any, index: number) => {
                        return (
                            <CmsCard cms={cms} key={index} />
                        )
                    } )}
                </div>
            </div>

        </>

    )
}
