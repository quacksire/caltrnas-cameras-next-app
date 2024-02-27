import RoutePicker from "@/components/pickers/routes";

export const runtime = 'edge'
export default function ChooseRoute({params}: { params: { choice: string } }) {

    return (
        <div>
            <RoutePicker/>
        </div>
    )


}
