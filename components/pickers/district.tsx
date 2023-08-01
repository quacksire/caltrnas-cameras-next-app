'use client'
import {counties, countyDistricts, districtNames, districts} from "@/lib/lists";
import {ScrollArea} from "@/components/ui/scroll-area";
import {ChoiceCardTemplate} from "@/components/home/choices";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import React from "react";
import {TypographySmall} from "@/components/ui/typography";
import {usePathname} from "next/navigation";


export default function DistrictPicker() {

    const pathname = usePathname()
    const apexPath = pathname.split('/')[1]

    return (
        <div>

            <div className={'min-h-screen flex'}>
                <div className={'flex-1 h-screen'}>
                    <ScrollArea className={'h-full w-full m-5'}>
                        <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gow-end-auto m-2'}>

                        {districts.map((district, index) => {
                            return (
                                <ChoiceCardTemplate title={`${districtNames[index]}`} available={true} link={`${apexPath}/district/${index + 1}`} key={index} />
                            )
                        })}
                        </div>
                    </ScrollArea>


                </div>

            </div>
        </div>
    )





}