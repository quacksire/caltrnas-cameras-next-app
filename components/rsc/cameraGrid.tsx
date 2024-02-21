"use server"
import CameraCard from "@/components/cards/cameraCard";
import {FrownIcon} from "lucide-react";
import {Spacer} from "@nextui-org/spacer";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import {getDataForSpecific} from "@/lib/fetchData";


export default async function CameraGrid({district, route, county} : {district? : string, route? : string, county? : string}) {
    let error = false

    let cameras = []
    let cams = []
    try {
        if (district) {
            //cams = await fetch('/api/d/' + district + '/cctv').then(res => res.json())
            cams = await getDataForSpecific(Number(district), 'cctv', `district-${district}`)
        }
        if (route) {
            cams = await getDataForSpecific(1, 'cctv', `route-${route}`)
        }
        if (county) {
            cams = await getDataForSpecific(1, 'cctv', `county-${county}`)
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



    //console.log(cams.length)

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
                <div className={'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'}>
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
