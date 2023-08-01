'use server'

import CmsCard from "@/components/cmsCard";

export default async function CmsGrid({district, route, county} : {district? : string, route? : string, county? : string}) {
    let res = await fetch(`https://caltrans-cameras.quacksire.workers.dev/cms`)
    let data = await res.json()
    let cmsSigns = data.map((item: { cms?: any }) => item.cms)

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
                <div className={'grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full'}>
                    {cmsSigns.map((signData: any) => {
                        return (
                            <CmsCard cms={signData} />
                        )})}
                </div>
    )
}
