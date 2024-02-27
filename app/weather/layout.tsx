import MaxWidthWrapper from "@/components/max-width-wrapper";
import TopContent from "@/components/TopContent";

export const runtime = 'edge';

// @ts-ignore
export default function Layout({children}) {
    return (
        <MaxWidthWrapper className="text-center align-middle h-full">
            <TopContent/>
            <div className={'m-3'}>
                {children}
            </div>
        </MaxWidthWrapper>
    )
}
