import CountyPicker from "@/components/pickers/county";
export const runtime = 'edge'

export default function ChooseCounty({params}: { params: { choice: string } }) {

    return (
        <div>
            <CountyPicker prefix={'cameras'}/>
        </div>
    )


}
