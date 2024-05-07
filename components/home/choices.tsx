'use client'
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import {choicesArray} from "@/lib/lists";
import React from "react";
import {Badge} from "@/components/ui/badge";


export function ChoiceCardTemplate({title = '', description = '', available = false, link = null}: {
    title?: string,
    description?: React.ReactNode | string,
    available?: boolean,
    link?: string | null
}) {

    return (
        <Link href={(link && available) ? `/${link}` : '#'} about={available ? "" : "Coming Soon!"} draggable={false}
              className={'h-full w-full'}>
            <Card
                className={available ? "w-50 h-min-25 m-2 cursor-pointer shadow-md hover:bg-muted" : "border-1 border-foreground-100 w-50 h-min-20 m-2 h-min cursor-not-allowed hover:shadow-md hover:bg-muted"}>
                <CardHeader>
                    {title && (
                        <CardTitle>
                            <Balancer className={"select-none"}>
                                {title}
                            </Balancer>
                        </CardTitle>
                    )}
                    {!available && (
                        <Balancer className={"select-none"}>
                            <Badge  variant={'outline'}>Coming Soon!</Badge>
                        </Balancer>
                    )}
                    {description && (
                        <CardDescription>
                            <Balancer className={"select-none"}>
                                {description}
                            </Balancer>
                        </CardDescription>
                    )}
                </CardHeader>
            </Card>
        </Link>

    )

}


export default function Choices() {


    return (
        <div className={"m-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-center"}>
            {choicesArray.map((choice, index) => (
                <ChoiceCardTemplate key={index} title={choice.title} description={choice.description} link={choice.link} available={choice.available} />
            ))}
        </div>
    )
}
