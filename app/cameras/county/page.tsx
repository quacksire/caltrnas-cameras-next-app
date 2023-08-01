import CountyPicker from "@/components/pickers/county";


export default function ChooseCounty({params} : {params : { choice: string}}) {

    return (
        <div>
            <CountyPicker />
        </div>
    )



}