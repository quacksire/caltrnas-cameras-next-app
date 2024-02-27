import DistrictPicker from "@/components/pickers/district";

export const runtime = 'edge'
export default function ChooseCounty({params}: { params: { choice: string } }) {

    return (
        <div>
            <DistrictPicker/>
        </div>
    )


}
