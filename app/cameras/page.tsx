import {ChoiceCardTemplate} from "@/components/home/choices";
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {choicesArray} from "@/lib/lists";

export default async function Home() {

    let choiceArr = choicesArray

    let choice = choiceArr[choiceArr.findIndex((c) => c.link === "cameras")]


    return (
        <div className="m-6">
            <div className={"m-5 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-center"}>
                <ChoiceCardTemplate title={'Choose By Route'} description={`Grab cameras from a specified route`} available={true} link={`${choice.link}/route`} />
                <ChoiceCardTemplate title={'Choose By County'} description={`Grab cameras from a specified county`} available={true} link={`${choice.link}/county`} />
                <ChoiceCardTemplate title={'Choose By District'} description={`Grab cameras from a Caltrans district.`} available={true} link={`${choice.link}/district`} />
            </div>
        </div>
    )
}
