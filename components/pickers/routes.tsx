'use client'
import {TypographyH3, TypographyLead} from "@/components/ui/typography";
import {Button} from "@nextui-org/button";
import CheckboxItem from "@/components/CheckboxItem";
import {useEffect, useState} from "react";
import {routes} from "@/lib/lists";
import {ScrollArea} from "@/components/ui/scroll-area";
import Shield from "@/components/sheild";
import Link from "next/link";


export default function RoutePicker() {


    const [interstateSelection, setInterstateSelection] = useState(false)
    const [usSelection, setUSSelection] = useState(false)
    const [stateSelection, setStateSelection] = useState(false)


    useEffect(() => {
        console.log(interstateSelection, usSelection, stateSelection)
    }, [interstateSelection, usSelection, stateSelection])

    useEffect(() => {

    }, []);

    return (
        <div>

            <div className={'block md:hidden'}>
                <TypographyH3>
                    <b>Routes</b>
                </TypographyH3>
                <div className={"m-5 grid grid-cols-1 md:grid-cols-3"}>
                    <CheckboxItem id={'interstate'} content={'Interstate Highways'} className={'m-2'} checked={!interstateSelection} func={(checkedState) => setInterstateSelection(!checkedState)} />
                    <CheckboxItem id={'us'} content={'US Highways'} className={'m-2'} checked={!usSelection} func={(checkedState) => setUSSelection(!checkedState)} />
                    <CheckboxItem id={'state'} content={'State Route'} className={'m-2'} checked={!stateSelection} func={(checkedState) => setStateSelection(!checkedState)} />

                </div>

            </div>

            <div className={'min-h-screen flex'}>
                <div className={'flex-2 hidden md:block'}>
                    <TypographyH3>
                        <b>Routes</b>
                    </TypographyH3>
                    <div className={"m-5 grid grid-cols-1"}>
                        <CheckboxItem id={'interstate'} content={'Interstate Highways'} className={'m-2'} checked={!interstateSelection} func={(checkedState) => setInterstateSelection(!checkedState)} />
                        <CheckboxItem id={'us'} content={'US Highways'} className={'m-2'} checked={!usSelection} func={(checkedState) => setUSSelection(!checkedState)} />
                        <CheckboxItem id={'state'} content={'State Route'} className={'m-2'} checked={!stateSelection} func={(checkedState) => setStateSelection(!checkedState)} />

                    </div>

                </div>


                <div className={'flex-1 h-screen'}>
                    <ScrollArea className={'h-full w-full'}>
                        {(interstateSelection || usSelection || stateSelection) && (
                            <div className={'grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full'}>
                                {routes.map((route, index) => {

                                    if (
                                        (interstateSelection && route.includes('I-')) ||
                                        (usSelection && route.includes('US-')) ||
                                        (stateSelection && route.includes('SR-'))
                                    ) {
                                        return (
                                            <Link href={`route/${route}`} key={index} className={'m-3'}>
                                                <Button key={index} className={'h-fit'} variant={'ghost'}
                                                >
                                                    <Shield route={route} height={100} width={100} />
                                                </Button>
                                            </Link>
                                        )
                                    } else {
                                        return null
                                    }
                                })}
                            </div>
                        )}
                        {!interstateSelection && !usSelection && !stateSelection && (
                            <TypographyLead>
                                <b>Choose a route type to get started.</b>
                            </TypographyLead>
                        )}
                    </ScrollArea>


                </div>

            </div>
        </div>
    )





}
