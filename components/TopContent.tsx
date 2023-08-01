'use client'
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {choicesArray} from "@/lib/lists";
import {usePathname} from "next/navigation";


export default function TopContent() {

    const pathname = usePathname()
    const path = pathname.split('/')[1]



    let choiceArr = choicesArray

    let choice = choiceArr[choiceArr.findIndex((c) => c.link === `${path}`)]


    return (
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
    )
}