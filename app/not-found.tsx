import {FrownIcon} from "lucide-react";

export default function NotFound() {
    return (
        <div className={'flex flex-col justify-center items-center h-full w-full mt-16'}>
            <FrownIcon size={64} />
            <h1 className={'text-4xl font-bold'}>There was a fucky wucky </h1>
        </div>)
}
