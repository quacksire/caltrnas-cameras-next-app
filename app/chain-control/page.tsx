import {ChoiceCardTemplate} from "@/components/home/choices";

export default async function Home() {

    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 h-full w-full justify-center"}>
            <ChoiceCardTemplate title={'Choose By Route'} description={`Grab cameras from a specified route`}
                                available={true} link={`chain-control/route`}/>
            <ChoiceCardTemplate title={'Choose By County'} description={`Grab cameras from a specified county`}
                                available={true} link={`chain-control/county`}/>
            <ChoiceCardTemplate title={'Choose By District'} description={`Grab cameras from a Caltrans district.`}
                                available={true} link={`chain-control/district`}/>
        </div>
    )
}
