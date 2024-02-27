import {ChoiceCardTemplate} from "@/components/home/choices";
import {choicesArray} from "@/lib/lists";

export const runtime = 'edge'
export default async function Home() {

    let choiceArr = choicesArray

    let choice = choiceArr[choiceArr.findIndex((c) => c.link === "cameras")]


    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 h-full w-full justify-center"}>
            <ChoiceCardTemplate title={'Choose By Route'} description={`Grab cameras from a specified route`}
                                available={true} link={`${choice.link}/route`}/>
            <ChoiceCardTemplate title={'Choose By County'} description={`Grab cameras from a specified county`}
                                available={true} link={`${choice.link}/county`}/>
            <ChoiceCardTemplate title={'Choose By District'} description={`Grab cameras from a Caltrans district.`}
                                available={true} link={`${choice.link}/district`}/>
        </div>
    )
}
