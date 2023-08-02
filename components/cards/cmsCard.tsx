'use client'
import {useEffect, useState} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import LocationHeader from "@/components/cards/LocationHeader";
export default function CmsCard({ cms, hideBlank } : { cms : any, hideBlank?: boolean }) {

    const [page, setPage] = useState(0);
    console.log(cms)


    useEffect(() => {
        //console.log(String(cms.message.display).includes("Extended"))
        if (String(cms.message.display).includes("Extended")) {
            setTimeout(() => {
                if (page === 0) {
                    setPage(1);
                } else {
                    setPage(0);
                }
            }, parseInt(cms.message.displayTime) * 1000)
        }
    })

    if (hideBlank && cms.message.display === "Blank") {
        return null
    }


    return (
        <Card className={'max-w-330 max-h-100 m-3 xs:w-100'} key={cms.location.locationName}>
            <LocationHeader location={cms.location} />
            <CardContent className={'flex justify-center w-full'}>

                {cms.message.display != "Blank" ? (
                    <p className="py-10 w-96 bg-black text-center leading-5 border-5 font-medium text-yellow-500 rounded-2xl shadow-2xl shadow-gray-500">
                        {page === 0 ? cms.message.phase1.phase1Line1 || "." : cms.message.phase2.phase2Line1 || "."}
                        <br />
                        {page === 0 ? cms.message.phase1.phase1Line2 || "." : cms.message.phase2.phase2Line2 || "."}
                        <br />
                        {page === 0 ? cms.message.phase1.phase1Line3 || "." : cms.message.phase2.phase2Line3 || "."}
                    </p>
                ) : (
                    <p className="py-10 w-96 text-center leading-5 font-medium text-muted-foreground rounded-2xl shadow-black">
                        This sign
                        <br />
                        is
                        <br />
                        currently blank.
                    </p>
                )}
            </CardContent>
            <CardFooter>
                <p className={'text-sm text-gray-500'}>Last updated on {" "} {new Date(`${cms.recordTimestamp.recordDate} ${cms.recordTimestamp.recordTime}`).toLocaleString()}</p>
            </CardFooter>
        </Card>
    );
}
