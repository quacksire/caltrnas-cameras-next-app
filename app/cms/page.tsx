import {ChoiceCardTemplate} from "@/components/home/choices";
import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import Balancer from "react-wrap-balancer";
import {choicesArray} from "@/lib/lists";

export default async function Home() {
    return (
            <div className={"grid grid-cols-1 lg:grid-cols-3 h-full w-full justify-center"}>
                <ChoiceCardTemplate title={'Choose By Route'} description={`Grab signs from a specified route`} available={true} link={`cms/route`} />
                <ChoiceCardTemplate title={'Choose By County'} description={`Grab signs from a specified county`} available={true} link={`cms/county`} />
                <ChoiceCardTemplate title={'Choose By District'} description={`Grab signs from a Caltrans district.`} available={true} link={`cms/district`} />
            </div>
    )
}
