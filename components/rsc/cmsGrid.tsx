'use server'

import {ScrollArea} from "@/components/ui/scroll-area";
import CmsCard from "@/components/cards/cmsCard";

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
        <>
            <ScrollArea className={'h-full w-full m-5'}>
                <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gow-end-auto m-2'}>
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
