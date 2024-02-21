'use client'
import {Button} from "@/components/ui/button";
import {counties, districtNames, featureArray, routes} from "@/lib/lists";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";
import {ChoiceCardTemplate} from "@/components/home/choices";
import React from "react";
import {usePathname} from "next/navigation";


export default function CountyPicker({ prefix } : {prefix?: string}) {

    const c = counties
    const pathname = usePathname()
    const apexPath = pathname.split('/')[1]

    return (
        <div>

            <div className={'min-h-screen flex'}>
                <div className={'flex-1 h-screen'}>
                    <ScrollArea className={'h-full w-full m-5'}>
                        <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 m-2'}>

                        {counties.map((county, index) => {

                            let countyName = String(county).toLowerCase().replaceAll(' ', '-')

                            return (

                                <ChoiceCardTemplate title={`${county}`} available={true} link={`${apexPath}/county/${countyName}`} key={index} />
                            )
                        })}
                        </div>
                    </ScrollArea>


                </div>

            </div>
        </div>
    )





}
