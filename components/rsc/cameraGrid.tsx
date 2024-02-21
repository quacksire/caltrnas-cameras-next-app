"use server"

import {ScrollArea} from "@/components/ui/scroll-area";
import CmsCard from "@/components/cards/cmsCard";
import CameraCard from "@/components/cards/cameraCard";
import {FrownIcon} from "lucide-react";
import {Spacer} from "@nextui-org/spacer";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {counties, countyDistricts} from "@/lib/lists";
import {urlToDisplay} from "@/lib/utils";


export default async function CameraGrid({district, route, county} : {district? : string, route? : string, county? : string}) {
    let error = false

    let cameras = []
    let cams = []
    try {
        if (district) {
            cams = await fetch('http://localhost:3000/api/d/' + district + '/cctv').then(res => res.json())
        }
        if (route) {
            console.log(`http://localhost:3000/api/d/1/cctv/route-${route}`)
            cams = await fetch(`http://localhost:3000/api/d/1/cctv/route-${route}`).then(res => res.json())
        }
        if (county) {
            console.log(county)
            cams = await fetch(`http://localhost:3000/api/d/1/cctv/county-${county}`).then(res => res.json())
        }
    } catch (e) {
        console.log(e)
        error = true
    }


    if (error) {
        return (
            <div className={'flex flex-col justify-center items-center h-full w-full mt-8'}>
                <FrownIcon size={64} />
                <h1 className={'text-4xl font-bold'}>There was a fucky wucky and it no worki</h1>
                <Spacer y={1} />

                <Link href={'/cameras'}>
                    <Button  variant={'light'}>
                        Go Back
                    </Button>
                </Link>
            </div>
        )
    }



    console.log(cams.length)

    if (cams?.length === 0) {
        return (
            <div className={'flex flex-col justify-center items-center h-full w-full mt-8'}>
                <FrownIcon size={64} />
                <h1 className={'text-4xl font-bold'}>No Cameras Found</h1>
                <Spacer y={1} />

                <Link href={'/cameras'}>
                <Button  variant={'light'}>
                    Go Back
                </Button>
                </Link>
            </div>
        )
    }




    return (
        <>
            <>
                <div className={'grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-2 items-center'}>
                    {cams.map((cam: any, index: number) => {
                        return (
                            <CameraCard camera={cam} key={index} hideBlank={true} />
                        )
                    } )}
                </div>
            </>

        </>

    )
}
