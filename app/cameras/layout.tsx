import TopContent from "@/components/TopContent";
import {Suspense} from "react";

export const runtime = 'edge'


// @ts-ignore
export default function Layout({children}) {
    return (
        <div className="text-center align-middle h-full pt-15">
            <TopContent/>
            <Suspense fallback={<div>Loading</div>}>
                <div className={'m-2'}>
                    {children}
                </div>

            </Suspense>
        </div>
    )
}
