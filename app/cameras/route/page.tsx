import {ChoiceCardTemplate} from "@/components/home/choices";
import RoutePicker from "@/components/pickers/routes";


export default function ChooseRoute({params} : {params : { choice: string}}) {

    return (
        <div>
            <RoutePicker prefix={`/cameras`} />
        </div>
    )



}