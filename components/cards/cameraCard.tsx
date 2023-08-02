'use client'
import {useEffect, useRef, useState} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import LocationHeader from "@/components/cards/LocationHeader";
import Image from 'next/image'
export default function CameraCard({ camera, hideBlank } : { camera : any, hideBlank?: boolean }) {
    const [historyScroll, setHistoryScroll] = useState(false)
    const [src, setSrc] = useState(camera.imageData.static.currentImageURL)
    const [hasLive, setHasLive] = useState(false)




    const tick = useRef();
    const firstStart = useRef(true);

    useEffect(() => {
        if (camera.imageData.streamingVideoURL !== "") {
            setHasLive(true)
        }
    }, [])

    useEffect(() => {
        if (firstStart.current) {
            firstStart.current = !firstStart.current;
            return;
        }

        let page = 1
        if (historyScroll) {
            console.log("mouse enter")

            //@ts-ignore
            tick.current = setInterval(() => {
                let url = String(camera.imageData.static.currentImageURL).split("/")

                let slug = url[url.length - 1].split(".")[0]
                console.log(slug)

                const urlWithoutSlug = url.slice(0, url.length - 1).join("/")
                console.log(urlWithoutSlug)

                setSrc(`${urlWithoutSlug}/previous/${slug}-${page}.jpg`)


                //setSrc(String(camera.imageData.static.currentImageURL).replace(".jpg", `-${page}.jpg`))
                console.log(src)
                if (page === 12) {
                    page = 1
                } else {
                    page += 1
                }
            }, 1000)
        } else {
            console.log("mouse exit")
            clearInterval(tick.current)
            setSrc(camera.imageData.static.currentImageURL)
        }

        return () => clearInterval(tick.current)
    }, [historyScroll])

    return (
        <Card className={'max-w-330 max-h-100 m-3 xs:w-100'} key={camera.location.locationName}>
            <LocationHeader location={camera.location} />
            <CardContent className={'justify-center w-full'}>
                {!hasLive && (
                    <div onMouseEnter={() => setHistoryScroll(true)} onMouseLeave={() => setHistoryScroll(false)}>
                        <Image className={'rounded-md shadow-md shadow-gray-500 bg-gray-500'} alt={camera.location.locationName} src={src} key={Date.now()} width={320} height={260} />
                    </div>
                )}
                {hasLive && (
                    <div>
                        <Image className={'rounded-md shadow-md shadow-gray-500 bg-gray-500'} alt={camera.location.locationName} src={`${src}?${Date.now()}`} key={Date.now()} width={320} height={260} />
                    </div>
                )}
            </CardContent>
            <CardFooter>
                Updated every {camera.imageData.static.currentImageUpdateFrequency} minutes
            </CardFooter>
        </Card>
    );
}
