import MaxWidthWrapper from "@/components/max-width-wrapper";
import TopContent from "@/components/TopContent";
import {Suspense} from "react";


// @ts-ignore
export default function Layout({children}) {
    return (
        <MaxWidthWrapper className="text-center align-middle h-full pt-20">
            <TopContent />
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                {children}
                </Suspense>
            </div>
        </MaxWidthWrapper>
    )
}
