'use server'

import {ScrollArea} from "@/components/ui/scroll-area";
import CmsCard from "@/components/cards/cmsCard";
import CameraCard from "@/components/cards/cameraCard";

export default async function CameraGrid({district, route, county} : {district? : string, route? : string, county? : string}) {
    let res = await fetch(`https://caltrans-cameras.quacksire.workers.dev/`, { cache: 'no-store' })
    let data = await res.json()
    let cams = data.map((item: {
        cctv: any}) => item.cctv)

    //cmsSigns = cmsSigns.filter((item: any) => item.inService === true)

    if (district) {
        cams = cams.filter((item: any) => item.location.district === district)
    }
    if (route) {
        cams = cams.filter((item: any) => item.location.route === route)
    }
    if (county) {
        cams = cams.filter((item: any) => item.location.county === county)
    }


    return (
        <>
            <ScrollArea className={'h-full w-full m-5'}>
                <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gow-end-auto m-2'}>
                    {cams.map((cam: any, index: number) => {
                        return (
                            <CameraCard camera={cam} key={index} hideBlank={true} />
                        )
                    } )}
                </div>
            </ScrollArea>

        </>

    )
}