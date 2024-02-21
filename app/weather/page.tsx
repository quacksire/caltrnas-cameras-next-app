import {ChoiceCardTemplate} from "@/components/home/choices";

export default async function Home() {
    return (
        <div className={"m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full justify-center"}>
            <ChoiceCardTemplate title={'Choose By Route'} description={`Grab weather from a specified route`}
                                available={true} link={`weather/route`}/>
            <ChoiceCardTemplate title={'Choose By County'} description={`Grab weather from a specified county`}
                                available={true} link={`weather/county`}/>
            <ChoiceCardTemplate title={'Choose By District'} description={`Grab weather from a Caltrans district.`}
                                available={true} link={`weather/district`}/>
        </div>
    )
}
