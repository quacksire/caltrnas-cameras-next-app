'use client'
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {useParams} from "next/navigation";
import {choicesArray} from "@/lib/lists";


export default function Layout({children}) {
    const params = useParams()


    let choice = choicesArray[choicesArray.findIndex((c) => c.link === params.choice)]



    return (
        <MaxWidthWrapper className="text-center align-middle h-full">
            <div className="m-5">
                <TypographyH1 className={"m-3"}>
                    <Balancer>
                        {choice.title}
                    </Balancer>
                </TypographyH1>
                <TypographyLead>
                    <Balancer>
                        {choice.description}
                    </Balancer>
                </TypographyLead>
            </div>
            <div className={'m-3'}>
                {children}
            </div>
        </MaxWidthWrapper>
    )
}