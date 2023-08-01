import {ChoiceCardTemplate} from "@/components/home/choices";
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {choicesArray} from "@/lib/lists";


export async function generateStaticParams() {
    let choiceArr = choicesArray

    return choiceArr.map((choice) => ({
        choice: choice.link
    }))
}

export default async function Home({params} : {params : { choice: string}}) {

    let choiceArr = choicesArray

    let choice = choiceArr[choiceArr.findIndex((c) => c.link === params.choice)]


    return (
        <div className="m-6">
            <div className={"m-5 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-center"}>
                <ChoiceCardTemplate title={'Choose By Route'} description={`Grab ${choice.item} from a specified route`} available={true} link={`${choice.link}/route`} />
                <ChoiceCardTemplate title={'Choose By County'} description={`Grab ${choice.item} from a specified county`} available={true} link={`${choice.link}/county`} />
                <ChoiceCardTemplate title={'Choose By District'} description={`Grab ${choice.item} from a Caltrans district.`} available={true} />
            </div>
        </div>
    )
}
