import {Button} from "@/components/ui/button";
import {counties, featureArray, routes} from "@/lib/lists";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";


export default function CountyPicker({ prefix } : {prefix?: string}) {

    const c = counties

    return (
        <div>

            <div className={'min-h-screen flex'}>
                <div className={'flex-1 h-screen'}>
                    <ScrollArea className={'h-full w-full m-5'}>
                        <div className={'grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 m-2'}>

                        {c.map((county, index) => {

                            let countyName = String(county).toLowerCase().replaceAll(' ', '-')

                            return (
                                <Link href={`county/${countyName}`} key={index}>
                                    <Button key={index} className={'m-4 h-fit items-center md:w-[150px] sm:w-[500px] sm:h-min'} variant={'secondary'}
                                    >
                                            {county}
                                    </Button>
                                </Link>
                            )
                        })}
                        </div>
                    </ScrollArea>


                </div>

            </div>
        </div>
    )





}