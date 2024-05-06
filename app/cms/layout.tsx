import TopContent from "@/components/TopContent";
import {Suspense} from "react";

export const runtime = 'edge'
// @ts-ignore
export default function Layout({children}) {
    return (
        <div className="text-center align-middle h-full pt-15">
            <TopContent/>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    {children}
                </Suspense>
            </div>
        </div>
    )
}
