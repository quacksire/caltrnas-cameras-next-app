import DistrictPicker from "@/components/pickers/district";


export default function ChooseCounty({params}: { params: { choice: string } }) {

    return (
        <div>
            <DistrictPicker/>
        </div>
    )


}
