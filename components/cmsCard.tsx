'use client'
import Shield from "../components/sheild";
import {useEffect, useState} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
export default function CmsCard({ cms } : { cms : any }) {

    const [page, setPage] = useState(0);


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

    return (
        <Card className={'max-w-330 max-h-100 m-3 xs:w-100'}>
            <CardHeader className={'h-15'}>
                <div className="flex flex-grow-0">
                    <Shield route={cms.location.route} width={75} height={75} className={'flex-none'} />
                    <p className="pl-2 pt-5">{cms.location.nearbyPlace}</p>
                </div>
                <hr className="my-4" />
            </CardHeader>
            <CardContent className={'flex justify-center w-full'}>
                <p
                    className="py-10 bg-black text-center leading-5 border-5 font-medium text-yellow-500 w-96 rounded-2xl shadow-black shadow-2xl"
                >
                    {page === 0 ? cms.message.phase1.phase1Line1 || "." : cms.message.phase2.phase2Line1 || "\n"}
                    <br />
                    {page === 0 ? cms.message.phase1.phase1Line2 || "." : cms.message.phase2.phase2Line2 || "\n"}
                    <br />
                    {page === 0 ? cms.message.phase1.phase1Line3 || "." : cms.message.phase2.phase2Line3 || "\n"}
                </p>
            </CardContent>
            <CardFooter>
                <p className={'text-sm text-gray-500'}>Last updated on {" "} {new Date(`${cms.recordTimestamp.recordDate} ${cms.recordTimestamp.recordTime}`).toLocaleString()}</p>
            </CardFooter>
        </Card>
    );
}
