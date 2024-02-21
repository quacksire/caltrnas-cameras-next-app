'use client'
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {choicesArray, districtNames} from "@/lib/lists";
import {usePathname} from "next/navigation";
import {urlToDisplay} from "@/lib/utils";


export default function TopContent() {

    const pathname = usePathname()
    const path = pathname.split('/')[1]



    let choiceArr = choicesArray

    let choice = choiceArr[choiceArr.findIndex((c) => c.link === `${path}`)]

    console.log(pathname)

    if (pathname.split('/district/').length > 1 && pathname.split('/')[3]) {
        const district = pathname.split('/')[3]
        if (!district) return
        choice.description = choice.description.replace("on the State Highway Network.", `in Caltran's ${districtNames[parseInt(district) - 1]} district.`)
    }
    if (pathname.split('/county/').length > 1 && pathname.split('/')[3]) {
        const county = pathname.split('/')[3]
        if (!county) return
        choice.description = choice.description.replace("on the State Highway Network.", `in ${urlToDisplay(decodeURI(county))} county.`)
    }
    if (pathname.split('/route/').length > 1 && pathname.split('/')[3]) {
        const route = pathname.split('/')[3]
        if (!route) return
        choice.description = choice.description.replace("on the State Highway Network.", `on ${urlToDisplay(route.replace("I-", "Interstate ").replace("US-", "US Highway ").replace("SR-", "State Route "))}.`)
    }


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
