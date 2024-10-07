import MaxWidthWrapper from "@/components/max-width-wrapper";
import TopContent from "@/components/TopContent";
import {Suspense} from "react";

export const runtime = 'edge';

// @ts-ignore
export default function Layout({children}) {
    return (
        <MaxWidthWrapper className="text-center align-middle h-full pt-15">
            <TopContent/>

                <div>
                    {children}
                </div>
        </MaxWidthWrapper>
    )
}
